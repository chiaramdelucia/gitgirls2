import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch, IndexRoute} from 'react-router-dom';
import Login from './children/Auth/Login';
import Signup from './children/Auth/Signup';
import Main from './Main';
import Account from './children/Auth/Account';
import Dashboard from './children/Dashboard';
import Topic from './children/DB_children/grandchildren/Topic';
import { logout } from './utils/firehelp';
import { firebaseAuth } from '../firebase.js';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/account' />}
    />
  )
}

export default class App extends Component {
  constructor(){
    super();
    this.state = {
    authed: false,
    loading: true,
  }
}
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
      <header>
        <div>
          <nav className="navbar navbar-static-top">
            <div className="container">
              
              <ul className="nav navbar-nav pull-right">
                <li>
                  <Link to="/account" className="navbar-brand">Account</Link>
                </li>
                <li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/signup" className="navbar-brand">Signup</Link>
                      </span>}
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">

              <Switch>
                <Route path='/' exact component={Main} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/signup' component={Signup} />
                <PrivateRoute authed={this.state.authed} path='/account' component={Account} />
                <Route path='/:condition' component={Dashboard}/>
                <Route path='/:condition/NJ' component={Topic}/>

                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
        </header>
      </BrowserRouter>
    );
  }
}