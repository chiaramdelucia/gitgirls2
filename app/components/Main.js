import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
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

ReactDOM.render(<App />, document.getElementById("app"));
