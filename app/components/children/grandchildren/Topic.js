import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import forumTable from '../../utils/forumTablehelp.js';
import Tabs from 'react-simpletabs';


const customStyles = {
  content : {
    width: '200px',
    height: '200px',
    overflow: 'scroll'
  }
};



class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title:'',
      category:'',
      author:'',
      content: '',
      location: this.props.params.location,
      condition: this.props.params.condition,
      posts: []
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmitModal = this.handleSubmitModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  componentDidMount () {
    forumTable.showInfo()
      .then((data) => {
        console.log('did mount' + '' + data)
        this.setState({
          posts: data
        })
      })  
  }

    
  handleOpenModal () {
    this.setState({ showModal: true });

  }
  
  handleCloseModal () {
    this.setState({ showModal: false });

  }

  handleSubmitModal() {

    console.log(this.state)

    this.setState({
      showModal:false,
      title: '',
      category: '',
      author: '',
      content: '',


    });

    forumTable.postInfo(this.state)
      .then((forum) => {
        //console.log(this);
        console.log(this.state)
        
        this.setState({
          posts: this.state.posts.concat([forum]),
          location: this.props.params.location,
          condition:this.props.params.condition

        });

      });

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const location = this.props.params.location;
    const condition = this.props.params.condition;
    console.log (this);
    console.log(this.props.params.location);
    console.log(location + condition);

    this.setState({
      [name]: value,
      location: location,
      condition: condition
    });


  }

  render() {
        // console.log("TPIC PROPS",this.props);
        

    return (
      
      <div className="tab-pane">
           <h3>{this.props.params.location}</h3>
           <h3>{this.props.params.condition}</h3>
            <Tabs>
              <Tabs.Panel title='Category #1'>
                <h2>Content #1 here</h2>
                <h3></h3>
                <ul>
                {this.state.posts.filter((post) => post.location == this.props.params.location && post.condition == this.props.params.condition).map((result,i)=>{
                    // console.log(result)
                    return <div key={i}><li>{result.title} - {result.location} - {result.condition}</li></div>
                  })} 
                  {/*{this.state.posts.map((result,i)=>{
                    // console.log(result)
                    return <div key={i}><li>{result.title}</li></div>
                  })} */}
                </ul>
              </Tabs.Panel>
              <Tabs.Panel title='Category #2'>
                <h2>Content #2 here</h2>
              </Tabs.Panel>
              <Tabs.Panel title='Category #3'>
                <h2>Content #3 here</h2>
              </Tabs.Panel>
            </Tabs>
              {/*   <ul>
                  {this.state.posts.map((result,i)=>{
                    console.log(result)
                    return <li><a> {result.title}</a></li> 
                  })} 
                </ul>*/}

          {/* Submit new Post to Forum */}
            <div>
              <button onClick={this.handleOpenModal}>Add Post</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                >

                <form>
                     
                    <div>
                      <label for="title">Title: </label>
                      <input type ='text' name ='title' value={this.state.title} onChange={this.handleInputChange}></input> 
                    </div>
                    <div>
                      <label for="category">Category: </label>
                      <input type ='text' name ='category' value={this.state.category} onChange={this.handleInputChange}></input> 
                    </div>
                    <div>
                      <label for="author">Author: </label>
                      <input type ='text' name ='author' value={this.state.author} onChange={this.handleInputChange}></input> 
                    </div>
                    <div>
                      <label for="content">Post: </label>
                      <textarea type ='text' name ='content' value={this.state.content} onChange={this.handleInputChange} style={customStyles.content}></textarea> 
                    </div>
                    <div>
                      <input type='hidden' name='location' value={this.props.params.location} onChange={this.handleInputChange}></input>
                      <input type='hidden' name='condition' value={this.props.params.condition} onChange={this.handleInputChange}></input>                    </div>
                    
                    <div>
                      <button onClick={this.handleCloseModal}>Cancel</button>
                      <input type='submit' value='Submit' onClick={this.handleSubmitModal}></input>
                    </div>

                  </form>
                </ReactModal>
            </div>



    </div>
      
    );

  }
}

export default Topic;