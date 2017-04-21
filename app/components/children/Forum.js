import React from 'react';
import ReactDOM from 'react-dom';



class Forum extends React.Component {
  constructor() {
    super();
  }

  render() {
        console.log("FORUM PROPS",this.props);

    return (

      
        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Chat about {this.props.disease}</h3>
              </div>
            </div>

            <div className="container"><h2>Forum</h2></div>
              <div id="exTab3" className="container"> 
              <ul  className="nav nav-pills">
                <li className="active"><a href="#/cancer1/Topic1" data-toggle="tab">Topic 1</a></li>
                <li><a href="#/cancer1/Topic2" data-toggle="tab">Topic 2</a></li>
                <li><a href="#/cancer1/Topic3" data-toggle="tab">Topic 3</a></li>
                <li><a href="#/Topic4" data-toggle="tab">Topic 4</a></li>
              </ul>

             
                {this.props.children}
             
           

              </div>


          </div> 

        </div>

      
    );
  }
}

export default Forum;

