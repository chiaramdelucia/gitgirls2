import React from 'react'
import Forum from './Forum.js'
import Scrape from './Scrape.js'
import DoctorForm from './DoctorForm.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    // console.log("component updated with condition" + this.props.route.condition);
    //do some stuff to load info about condition here, and set state data so u can pass it down to other components!    
  }

  render() {
    console.log("Dashboard PROPS",this.props);
    return (

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className='well'>
              <h3>Condition: {this.props.params.condition}</h3>
              {this.props.children}
            </div>
              <Forum condition={this.props.params.condition} >
              {this.props.children}
              </Forum>
              <Scrape condition={this.props.params.condition}/>
            <DoctorForm condition={this.props.params.condition}/>

          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

