import React from 'react'
// import ReactDOM from 'react-dom'
import Tabs from 'react-simpletabs'
import scrapehelp from '../../utils/scrapehelp'

class Scrape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nci: [],
      who: [],
      cruk: [],
    };
    }


  componentWillMount(){
    scrapehelp.getNCIscrape()
      .then((data) => {
        // console.log('REACT NCI ' + data); 
        this.setState({
          nci: data
        })
      });
    scrapehelp.getWHOscrape()
      .then((data)=> {
        // console.log('REACT WHO' + data); 
        this.setState({
        who: data
      })
    });
    scrapehelp.getCRUKscrape()
      .then((data)=> {
        // console.log('REACT CRUK' + data); 
        this.setState({
        cruk: data
      })
    });
  }

  render() {

    return (
        <div className="row">
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title"><span><img className="news" src="./images/Newspaper.png" alt="news"></img> In the News</span></h3>
              </div>
              <div className="panel-body"> 
                <Tabs>
                  <Tabs.Panel title='NCI'>
                    <h2>National Cancer Institute</h2>
                    <ul>
                      {this.state.nci.map((result, i) => {
                        return <li><a key={i} href={result.link} target='_blank'>{result.title}</a></li>
                        })
                      }
                    </ul>

                  </Tabs.Panel>
                  <Tabs.Panel title='WHO'>
                    <h2>WHO</h2>
                    <ul>
                      {this.state.who.map((result, i) => {
                        return <li><a key={i} href={result.link} target='_blank'>{result.title}</a></li>
                        })
                      }
                    </ul>
                  </Tabs.Panel>
                  <Tabs.Panel title='CRUK'>
                    <h2>Cancer Research UK</h2>
                    <ul>
                      {this.state.cruk.map((result, i) => {
                        return <li><a key={i} href={result.link} target='_blank'>{result.title}</a></li>
                        })
                      }
                    </ul>
                  </Tabs.Panel>
                </Tabs>

              </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Scrape;

