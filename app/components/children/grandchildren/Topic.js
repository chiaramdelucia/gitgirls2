import React from 'react'
import ReactDOM from 'react-dom'


class Topic extends React.Component {
  constructor() {
    super();
  }
  
  render() {
        console.log("TPIC PROPS",this.props);

    return (
      
          <div className="tab-pane" id="1b">
            <h3>Topic</h3>
            <h4>Post1</h4>
            <h4>Post2</h4>
          </div>
      
    );

  }
}

export default Topic;