import React from 'react'
import ReactDOM from 'react-dom'
import Forum from './Forum.js'
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
    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Disease: {this.props.route.disease}</h3>
              </div>
              <div className="panel-body">
                The disease is {this.props.route.disease}
              </div>
              <Forum disease={this.props.route.disease} />
              <Scrape />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;

