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
        <div className ='well'>

          <div id="exTab3" className="container"> 

            <div className='row'>
              <div className='col-md-12'>
                  <h2>Forum</h2>
                  <ul  className="nav nav-tabs">
                    <li><a href={"#/" + this.props.condition + "/NJ"} data-toggle="tab" style = {customStyles.content}>NJ</a></li>
                    <li><a href={"#/" + this.props.condition + "/NY"} data-toggle="tab" style = {customStyles.content}>NY</a></li>
                    <li><a href={"#/" + this.props.condition + "/PA"} data-toggle="tab" style = {customStyles.content}>PA</a></li>
                    <li><a href={"#/" + this.props.condition + "/CT"} data-toggle="tab" style = {customStyles.content}>CT</a></li>
                  </ul>
              </div>
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

