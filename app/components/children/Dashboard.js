import React from 'react'
import Forum from './Forum.js'
import Scrape from './Scrape.js'
import DoctorForm from './DoctorForm.js'

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate(){
    // console.log("component updated with disease" + this.props.route.disease);
    //do some stuff to load info about disease here, and set state data so u can pass it down to other components!    
  }

  render() {
    // console.log("Dashboard PROPS",this.props);
    return (

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className='well'>
              <h3>Disease: {this.props.params.disease}</h3>
            </div>
              <Forum disease={this.props.params.disease} >
              {this.props.children}
              </Forum>
              {/*<Scrape disease={this.props.params.disease}/>
              <DoctorForm disease={this.props.params.disease}/>*/}

          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

