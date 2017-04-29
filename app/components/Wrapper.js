import React from "react";

class Wrapper extends React.Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (

    	<div>{this.props.children}</div>
    );
  }
}

export default Wrapper