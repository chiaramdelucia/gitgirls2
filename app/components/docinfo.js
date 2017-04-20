import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
	constructor() {
		super();
		// this.state would need to be whatever we need to put it at

	};

	}
	render() {
    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Disease: {this.props.route.disease}</h3>
              </div>
              <div className="panel-body">
                The disease is {this.props.route.disease}
              </div>
              <Forum disease={this.props.route.disease} />
              <Scrape />
            </div>

          </div>

        </div>
      </div>
    );
  }

};

export default DocInfo