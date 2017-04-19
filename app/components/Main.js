import React from 'react'
import ReactDOM from 'react-dom'



class Main extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
              <h1>Welcome to Cancer Alliance</h1>
              <a href='#/cancer1'>Cancer</a>
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
