import React from 'react'
import ReactDOM from 'react-dom'


class Scrape extends React.Component {
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
                <h3 className="panel-title">Scrapes</h3>
              </div>
              <div className="panel-body"> 
                <Tabs>
                  <Pane label="Tab 1">
                    <div>This is my tab 1 contents!</div>
                  </Pane>
                  <Pane label="Tab 2">
                    <div>This is my tab 2 contents!</div>
                  </Pane>
                  <Pane label="Tab 3">
                    <div>This is my tab 3 contents!</div>
                  </Pane>
                </Tabs>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Scrape;

