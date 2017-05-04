import React from 'react';
import ReactDOM from 'react-dom';

const customStyles = {
  content : {
    color: 'black'
  }
};


class Forum extends React.Component {
  constructor() {
    super();
  }

  render() {
        // console.log("FORUM PROPS",this.props);

    return (
      <div className="row">

     
       

          <div className="col-md-12">
          
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title"><span><img className="forum" src="./images/Forum.png" alt="forum"></img>Chat about {this.props.condition}</span></h3>

       

                  <ul  className="nav nav-tabs">
                    <li><a href={"#/" + this.props.condition + "/NJ"} data-toggle="tab" style = {customStyles.content}>NJ</a></li>
                    <li><a href={"#/" + this.props.condition + "/NY"} data-toggle="tab" style = {customStyles.content}>NY</a></li>
                    <li><a href={"#/" + this.props.condition + "/PA"} data-toggle="tab" style = {customStyles.content}>PA</a></li>
                    <li><a href={"#/" + this.props.condition + "/CT"} data-toggle="tab" style = {customStyles.content}>CT</a></li>
                  </ul>

              </div>
           

              <div className = 'tab-content'>
                  {this.props.children}      
              </div>

            </div>
          </div>
        </div> 
      
      
    );
  }
}

export default Forum;

