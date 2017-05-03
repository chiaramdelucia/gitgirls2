import React from 'react';
import ReactDOM from 'react-dom';



class Forum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
        // console.log("FORUM PROPS",this.props);

    return (
      <div className="row">
     
       

          <div className="col-md-12">
          
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Chat about {this.props.condition}</h3>
              </div>
           

            <div className="container"><h2>Forum - Select your area</h2></div>
              <div id="exTab3" className="container"> 
              <ul  className="nav nav-pills">
                <li><a href={"#/" + this.props.condition + "/NJ"} data-toggle="tab">NJ</a></li>
                <li><a href={"#/" + this.props.condition + "/NY"} data-toggle="tab">NY</a></li>
                <li><a href={"#/" + this.props.condition + "/PA"} data-toggle="tab">PA</a></li>
                <li><a href={"#/" + this.props.condition + "/CT"} data-toggle="tab">CT</a></li>
              </ul>

             
                {this.props.children}
             
           

              </div>
              </div>

          </div> 

        </div>
    
      
      
    );
  }
}

export default Forum;

