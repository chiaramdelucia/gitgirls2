import React from 'react'
import ReactDOM from 'react-dom'



class Forum extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Chat about {this.props.disease}</h3>
              </div>
              <div className="panel-body">                
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Forum;

