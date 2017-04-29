import React from "react";

class Main extends React.Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
    <div>
    <div>
      <div className="container">
        <div className="row">  
          <div className="col-md-3">
            <img className="logoMain" src="./images/logo.png" alt="logo"/>
          </div>
      
          <div className="col-md-9">
            <h1>Cancer Alliance</h1>
            <h3><b>HAVE AN ALLY | BE AN ALLY</b></h3>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">  
          <div className="col-md-4">

            <h4> Click on a topic below to learn more, connect and share your experiences</h4>

            <p><button className='button mainBtn'><a href="#/breast"><span><img className="breastMain" src="./images/breast.png" alt="breast"/>Breast</span></a></button></p>
            
            <p>
              <button className="button mainBtn"><a href="#/ovarian"><span><img className="ovMain" src="./images/ovary icon.png" alt="ovary"/>Ovarian</span></a></button>

            </p>
            <p>
              <button className="button mainBtn"><a href="#/colon"><span><img className="colonMain" src="./images/colon.png" alt="colon"/>Colon</span></a></button>
            </p>

            <p>
              <button className="button mainBtn"><a href="#/prostate"><span><img className="prosMain" src="./images/prostate.png" alt="prostate"/>Prostate</span></a></button>
            </p>
            <p>
              <button className="button mainBtn"><a href="#/lung"><span><img className="lungMain" src="./images/lung icon.png" alt="lung"/>Lung</span></a></button>
            </p>
          </div>

          <div className="col-md-8">

            <img className="main-img" src="./images/connect.jpg" alt="connect"/>
            <h4> Cancer Alliance is a place where you can talk with and support other surviors with your specific disease.  Our mission is educating and saving lives by empowering those living with and fighting cancer. </h4>
          </div>
        </div>
      </div>  
      </div>
      <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Main
