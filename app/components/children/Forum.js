import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component {
  constructor() {
    super();
    // Since we're passing these methods to be used as callback functions,
    // we should bind them to our component here
    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);
  }
  // handleIncrement() {
  //   this.setState({ count: this.state.count + 1 });
  // }
  // handleDecrement() {
  //   this.setState({ count: this.state.count + -1 });
  // }
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
              <p>Forum</p>
          </div>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

