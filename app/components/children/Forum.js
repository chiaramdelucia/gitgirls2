import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route} from 'react-router-dom';
import Topic from './grandchildren/Topic'

const customStyles = {
  content : {
    color: 'black'
  }
};


class Forum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
        console.log("FORUM PROPS",this.props);

    return (
      <div className="row">

     
       

          <div className="col-md-12">
          
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title"><span><img className="forum" src="./images/Forum.png" alt="forum"></img>Chat</span></h3>

       

                  <ul  className="nav nav-tabs">
                    <li><Link to={"/" + this.props.condition + "/NJ"} data-toggle="tab" style = {customStyles.content}>NJ</Link></li>
                    <li><Link to={"/" + this.props.condition + "/NY"} data-toggle="tab" style = {customStyles.content}>NY</Link></li>
                    <li><Link to={"/" + this.props.condition + "/PA"} data-toggle="tab" style = {customStyles.content}>PA</Link></li>
                    <li><Link to={"/" + this.props.condition + "/CT"} data-toggle="tab" style = {customStyles.content}>CT</Link></li>
                  </ul>

              </div>
           
              
              <div className = 'tab-content'>
                  {this.props.children}   
                  <Route path='/:condition/:location' component={Topic}/>
              </div>

            </div>
          </div>
        </div> 
      
      
    );
  }
}

export default Forum;

