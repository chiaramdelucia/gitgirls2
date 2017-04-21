import React from 'react'
import ReactDOM from 'react-dom'
import Forum from './Forum.js'
import Topic1 from './grandchildren/Topic1';
import Topic2 from './grandchildren/Topic2';
import Topic3 from './grandchildren/Topic3';
import Topic4 from './grandchildren/Topic4';
import Scrape from './Scrape.js'

class Dashboard extends React.Component {
  constructor() {
    super();

  }

  componentDidUpdate(){
    console.log("component updated with disease" + this.props.route.disease);
    //do some stuff to load info about disease here, and set state data so u can pass it down to other components!    
  }

  render() {
    console.log("Dashboard PROPS",this.props);
    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Disease: {this.props.params.disease}</h3>
              </div>
              <div className="panel-body">
                The disease is {this.props.params.disease}
              </div>

              <Forum disease={this.props.params.disease} >
              {this.props.children}
              </Forum>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;

