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
      title:'',
      category:'',
      author:'',
      content: '',
      post: []
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
          post: data
        })
      })  
  }

  // componentDidUpdate(){
  //   forumTable.postInfo();
  // }
    
  handleOpenModal () {
    this.setState({ showModal: true });

  }
  
  handleCloseModal () {
    this.setState({ showModal: false });

  }

  handleSubmitModal() {
    
    this.setState({
      showModal:false,
    });

    forumTable.postInfo(this.state)
      .then((forum) => {
        //console.log(this);
        this.setState({
          post: this.state.post.concat([forum])
        });
      });
    // event.preventdefault();

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });


  }

  render() {
        // console.log("TPIC PROPS",this.props);

    return (
      
          <div className="tab-pane">
            <h3>{this.props.params.state}</h3>
            <ul>
              {this.state.post.map((result,i)=>{
                console.log(result)
                return <li><a> {result.title}</a></li> 
              })} 
              
            </ul>

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