import React from 'react'
import Forum from './Forum.js'
import Scrape from './Scrape.js'
import DoctorForm from './DoctorForm.js'
import {Link} from 'react-router-dom';

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
    this.props.match.params.condition = capitalizeFirstLetter(this.props.match.params.condition);


    return (
      <div>
        <div className="container">
          <div className="row">  
            <div className="col-md-4">
              <img className='logoMain' src={"./images/" + this.props.match.params.condition + ".png"} alt='breast' />
            </div>
            <div className="col-md-4">
              <h1>{this.props.match.params.condition} Cancer</h1>
                <h3>Learn and support fellow surviors living with or have fought {this.props.match.params.condition} Cancer</h3>
            </div>

            <div className="col-md-4">
              <button id="transparent"><a href="/"><span ><img className='logoMain' src="./images/logo.png" alt="logo"/></span></a></button>  
            </div>
          </div>
        </div>

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
              <div className='well'>
                <h3>Condition: {this.props.match.params.condition}</h3>

              </div>
              <Forum condition={this.props.match.params.condition}>
               
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

