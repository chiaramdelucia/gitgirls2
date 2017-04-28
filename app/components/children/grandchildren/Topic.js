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
      area: this.props.params.state,
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
      title: '',
      category: '',
      author: '',
      content: '',
    });

    forumTable.postInfo(this.state)
      .then((forum) => {
        //console.log(this);
        this.setState({
          posts: this.state.posts.concat([forum])

        });
      });

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
              {this.state.posts.filter((element, i)=>{
                console.log(element.title)
                return <li><a> key{element.title}</a></li> 
              })} 
              
            </ul>

            <Tabs>
              <Tabs.Panel title='Category #1'>
                <h2>Content #1 here</h2>
                <ul>
                  {this.state.posts.map((result,i)=>{
                    console.log(result)
                    return <div key={i}><li>{result.title}</li>
                    <li>{result.category}</li>
                    <li>{result.content}</li> </div>
                  })} 
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