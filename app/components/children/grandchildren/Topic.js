import React from 'react';
import ReactModal from 'react-modal';
import Tabs from 'react-simpletabs';
import forumTable from '../../utils/forumTablehelp.js';
import commentHelp from '../../utils/commenthelp.js';



const customStyles = {
  content : {
    width: '200px',
    height: '200px',
    overflow: 'scroll',
    color: 'black'
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
      posts: [],
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmitModal = this.handleSubmitModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleComments = this.handleComments.bind(this);
  }

  componentDidMount () {
    forumTable.showInfo()
    .then((data) => {
      console.log('did mount(data): ', data)
      this.setState({
        posts: data,          
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
    this.setState({
      showModal:false,
      title: '',
      category: '',
      author: '',
      content: '',
    });
    forumTable.postInfo(this.state)
    .then((forum) => {
      this.setState({
        posts: this.state.posts.concat([forum]),
        location: this.props.params.location,
        condition:this.props.params.condition
      });
    });
  }

  handleComments(id) {
    return () => {
      this.setState({
        comment: '',
        username: ''
      });
      commentHelp.postComment({ data: this.state, id })
        .then((comments) => {
          this.state.posts.forEach((element) => {  
            if(element._id == id){
              this.setState({
                posts: this.state.posts.concat([comments])
              })
              console.log(this.state)
            }
          })        
        })
        .catch(console.error)
    }
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const location = this.props.params.location;
    const condition = this.props.params.condition;
    this.setState({
      [name]: value,
      location: location,
      condition: condition
    });
  }

  render() {
            console.log("TPIC PROPS",this.props);
      const routeFilter =  this.state.posts.filter((post) => {return post.location == this.props.params.location && post.condition == this.props.params.condition});
        const one = routeFilter.filter((c) => {return c.category == 'nj'})
        const two = routeFilter.filter((c) => {return c.category == 'Testing'})

    return (    
      <div role='tab-pane' className="tab-pane active">
           <h3>{this.props.params.location}</h3>
           <h3>{this.props.params.condition}</h3>
            <Tabs>
              <Tabs.Panel title='Category #1'>
                <h2>Content #1 here</h2>
                <ul>

                {one.map((result,i)=>{
                    // console.log(result._id)
                    // console.log('i: ', i._id)
                    return <div key={i} className='well'>
                      <h5>Title: {result.title}</h5>
                      <p>Post: {result.location} - {result.condition}</p>
                      <p>Author: {result.author}</p>
                      
                      {result.comment.map((data,i)=> {return
                        <div key={i}> 
                            <p>{data.username}</p>
                            <p>{data.comment}</p>
                        </div>
                      })}
                      <ul> Comments </ul> 
                        <li> </li>
                        <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.handleInputChange}></input>
                        <br></br> 
                        <textarea type='text' name='comment' value={this.state.comment} placeholder='Comments' onChange={this.handleInputChange}></textarea>
                        <button type="submit" onClick={this.handleComments(result._id)}>Submit</button>
                    </div>

                  })}

                </ul>
              </Tabs.Panel>
              <Tabs.Panel title='Category #2'>
                <h2>Content #2 here</h2>
                <ul>
                {/*{two.map((result,i)=>{

                    // console.log(result)
                    return <div key={i} className='well'>
                    <h5>{result.title}</h5>
                    <p>{result.location} - {result.condition}</p>
                    <form>
                    <input type='text' name='username' placeholder='Username' onChange={this.handleInputChange}></input>
                    <textarea type='text' name='comment' value={this.state.comment} placeholder='Comments' onChange={this.handleInputChange}></textarea>
                    </form>
                    </div>
                  })} */}
                </ul>
              </Tabs.Panel>


              <Tabs.Panel title='Category #3'>
                <h2>Content #3 here</h2>
              </Tabs.Panel>
            </Tabs>

          {/* Submit new Post to Forum */}
            <div>
              <button onClick={this.handleOpenModal}>Add Post</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                >

                <form>
                     
                    <div>
                      <label htmlFor="title">Title: </label>
                      <input type ='text' name ='title' value={this.state.title} onChange={this.handleInputChange}></input> 
                    </div>
                    <div>
                      <label htmlFor="category">Category: </label>
                      <input type ='text' name ='category' value={this.state.category} onChange={this.handleInputChange}></input> 
                    </div>
                    <div>
                      <label htmlFor="author">Author: </label>
                      <input type ='text' name ='author' value={this.state.author} onChange={this.handleInputChange}></input> 
                    </div>
                    <div>
                      <label htmlFor="content">Post: </label>
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



