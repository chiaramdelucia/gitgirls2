import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from 'react-simpletabs'
// import {scrapeACS} from '../utils/scrapehelp'
import scrapehelp from '../utils/scrapehelp'
// import axios from 'axios'


class Scrape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrapedstuff: 'love'
    }
  }

  componentDidMount(){
    scrapehelp.getNCIscrape()
      .then(function(data){
        console.log('REACT NCI ' + data)
        this.setState({
          scrapedstuff: 'hate'
        })
      })
    // .then(function(data){
    //   // console.log('NCI Response ' + data.data[0].title)
    //   this.setState({
    //  scrapedstuff: data.data
    //    });
    // }).bind(this)
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
                  <Tabs.Panel title='Tab #1'>
                    <h2>Content #1 here</h2>

                  </Tabs.Panel>
                  <Tabs.Panel title='Tab #2'>
                    <h2>Content #2 here</h2>
                  </Tabs.Panel>
                  <Tabs.Panel title='Tab #3'>
                    <h2>Content #3 here</h2>
                  </Tabs.Panel>
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

