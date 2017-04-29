import React from "react";

class Main extends React.Component {
  constructor() {
    super()


  }
  
  render() {
    return (
      <div className="container">
        <div className="row">  
          <div className="col-md-3">
          <img scr="./public/css/images/logo.png"> </img>

          
          </div>
          <div className="col-md-9">
            <h1>Cancer Alliance</h1>
            <h3><b>HAVE AN ALLY | BE AN ALLY</b></h3>
    


          </div>
          </div>

        

        <div className="row" >
          <div className="col-md-12">
             
              <a href ='#/cancer1'>Cancer 1</a>
              <br></br>
              <a href ='#/cancer2'>Cancer 2</a>
              <br></br>
              <a href ='#/cancer3'>Cancer 3</a>
              <br></br>
              <a href ='#/cancer4'>Cancer 4</a>
          </div>
        </div>

        <div className="container">

          {this.props.children}

        </div>
          

      </div>
    );
  }
}

export default Main
