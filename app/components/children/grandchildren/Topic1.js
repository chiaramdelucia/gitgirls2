import React from 'react'
import ReactDOM from 'react-dom'


class Topic1 extends React.Component {
  constructor() {
    super();
  }
  
  render() {
        console.log("TPIC PROPS",this.props);

    return (
      
          <div className="tab-pane" id="1b">
            <h3>Topic 1</h3>
            <h4>Post2</h4>
            <h4>Post2</h4>
          </div>
      
    );

  }
}

export default Topic1;