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
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmitModal = this.handleSubmitModal.bind(this);
  }

  componentDidMount () {
    forumTable.showInfo().then((data)=>{console.log('forumTablehelp') + data})
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
            <h4>Post1</h4>
            <h4>Post2</h4>
            <div>
              <button onClick={this.handleOpenModal}>Add Post</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                >
                  <div>
                    <label for="postTitle">Title: </label>
                    <input type ='text' name ='postTitle'></input> 
                  </div>
                  <div>
                    <label for="category">Category: </label>
                    <input type ='text' name ='category'></input> 
                  </div>
                  <div>
                    <label for="userName">User Name: </label>
                    <input type ='text' name ='userName'></input> 
                  </div>
                  <div>
                    <label for="post">Post: </label>
                    <textarea type ='text' name ='post' style={customStyles.content}></textarea> 
                  </div>
                  <button onClick={this.handleCloseModal}>Cancel</button>
                  <button onClick={this.handleSubmitModal}>Submit</button>
                </ReactModal>
            </div>
          </div>
      
    );

  }
}

export default Topic;