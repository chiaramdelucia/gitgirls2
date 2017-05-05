import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

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
        console.log("FORUM PROPS",this.props);

    return (
      <div className="row">
        <div className ='well'>
          <div id="exTab3" className="container"> 
            <div className='row'>

              <div className='col-md-12'>
                  <h2>Forum</h2>
                  <ul  className="nav nav-tabs">
                    <li><Link to={"/" + this.props.condition + "/NJ"} data-toggle="tab" style = {customStyles.content}>NJ</Link></li>
                    <li><Link to={"/" + this.props.condition + "/NY"} data-toggle="tab" style = {customStyles.content}>NY</Link></li>
                    <li><Link to={"/" + this.props.condition + "/PA"} data-toggle="tab" style = {customStyles.content}>PA</Link></li>
                    <li><Link to={"/" + this.props.condition + "/CT"} data-toggle="tab" style = {customStyles.content}>CT</Link></li>
                  </ul>
              </div>
           
              
              <div className = 'tab-content'>
                  
              </div>

            </div>
          </div>
        </div> 
      </div>
      
    );
  }
}

export default Forum;

