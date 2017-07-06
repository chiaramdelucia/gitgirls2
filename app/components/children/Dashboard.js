import React from 'react'
import Forum from './DB_children/Forum.js'
import Scrape from './DB_children/Scrape.js'
import DoctorForm from './DB_children/DoctorForm.js'
import {Link,Route} from 'react-router-dom';
import Topic from './DB_children/grandchildren/Topic.js'
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
    console.log(this.props.match.params.condition)

    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
     var CapCondition = capitalizeFirstLetter(this.props.match.params.condition);
     console.log(CapCondition)


    return (
      <div>
        <div className="container top">
          <div className="row">  
            <div className="col-md-4">
              <img className='logoMain' src={"./images/"+ this.props.match.params.condition + ".png"} alt='condition' />
            </div>
            <div className="col-md-4">
              <h1>{CapCondition} Cancer</h1>
                <h3>Learn and support fellow surviors living with or have fought {CapCondition} Cancer</h3>
            </div>
         

            <div className="col-md-4">
              <button id="transparent"><Link to="/"><span ><img className='logoMain' src="./images/logo.png" alt="logo"/></span></Link></button>  
            </div>
          </div>
        </div>
 <hr></hr>
        <div className="container">
          <div className="row">  
            <div className="col-md-4">

              <p>
                <button className="button Main mainBtn"><Link to="/breast"><span><img className='ovMain' src="./images/breast.png" alt="logo"/>Breast</span></Link></button>
              </p>
              <p>
                <button className="button mainBtn"><Link to='/ovarian'><span><img className='ovMain' src="./images/ovarian.png" alt="ovary"/>Ovarian</span></Link></button>
              </p>
              <p>
                <button className="button mainBtn"><Link to="/colon"><span><img className='colonMain' src="./images/colon.png" alt="colon"/>Colon</span></Link></button>
              </p>

              <p>
                <button className="button mainBtn"><Link to='/prostate'><span><img className='prosMain' src="./images/prostate.png" alt="prostate"/>Prostate</span></Link></button>
              </p>
              <p>
                <button className="button mainBtn"><Link to='/lung'><span><img className='lungMain' src="./images/lung.png" alt="lung"/>Lung</span></Link></button>
              </p>
            </div>
            
            <div className="col-lg-8">
              <Forum condition={this.props.match.params.condition}>
                {this.props.children}
                
              </Forum>
              <Scrape condition={this.props.match.params.condition}/>
              <DoctorForm condition={this.props.match.params.condition}></DoctorForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

