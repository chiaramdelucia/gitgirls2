import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import forumTable from '../../utils/forumTablehelp.js'

const customStyles = {
  content : {
    width: '200px',
    height: '200px',
    overflow: 'scroll'
  }
};



class Topic extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      posts:[]
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmitModal = this.handleSubmitModal.bind(this);
  }

  componentDidMount () {
    forumTable.showInfo()
      .then((data) => {
        (console.log(data))
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
    this.setState({showModal: false, });

  }

  render() {
        console.log("TPIC PROPS",this.props);

    return (
      
          <div className="tab-pane">
            <h3>{this.props.params.topic}</h3>
            <ul>
              {this.state.posts.map((result,i)=>{
                return <li><a> {result}></a></li> 
              })}
            </ul>
            <h4>Post1</h4>
            <h4>Post2</h4>
            <div>
              <button onClick={this.handleOpenModal}>Add Post</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                >
                  <form name ='forumPost' method='post'>
                    <div>
                      <label for="title">Title: </label>
                      <input type ='text' name ='title'></input> 
                    </div>
                    <div>
                      <label for="category">Category: </label>
                      <input type ='text' name ='category'></input> 
                    </div>
                    <div>
                      <label for="author">Author: </label>
                      <input type ='text' name ='author'></input> 
                    </div>
                    <div>
                      <label for="content">Post: </label>
                      <textarea type ='text' name ='content' style={customStyles.content}></textarea> 
                    </div>
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