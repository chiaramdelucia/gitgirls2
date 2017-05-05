import React from 'react';
import ReactModal from 'react-modal';
import Tabs from 'react-simpletabs';
import forumTable from '../../utils/forumTablehelp.js';
import commentHelp from '../../utils/commenthelp.js';
import axios from 'axios'


const customStyles = {
  content : {
    width: '200px',
    height: '200px',
    overflow: 'scroll',
    color: 'black'
  }
};
// one.map(res=><Post post={res}/>)


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

  componentWillMount(){
    this.getPosts();
  }

  componentDidMount () {
    console.log("mounted this.posts", this.state.posts);
   // this.getPosts()
  }
  getPosts(){
      forumTable.showInfo().then((posts) => {
      console.log('did mount(data): ', posts)
      this.setState({posts});
    }); 

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
    console.log('first invocation bound on id', id);
    console.log("this", this);
    return (e) => {
    e.preventDefault();

      commentHelp.postComment({ data: this.state, id })
        .then((comment) => {
          console.log('id: ', id)

          this.state.posts.forEach((element) => {  
            if(element._id == id){
              this.setState({
                posts: this.state.posts.concat([comment]),
                comment: '',
                username: ''
              });
              console.log(this.state)
            }
          });        
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
        // console.log("TPIC PROPS",this.props);
      const routeFilter =  this.state.posts.filter((post) => {return post.location == this.props.params.location && post.condition == this.props.params.condition});
        const one = routeFilter.filter((c) => {return c.category == 'nj'});
        const two = routeFilter.filter((c) => {return c.category == 'Testing'});
        
    return (    
    
      <div role='tab-pane' className="tab-pane active">
           <h3>{this.props.params.location}</h3>
           <h3>{this.props.params.condition}</h3>
           <div className='tab-content'>
            <Tabs>
              <Tabs.Panel title='Category #1'>
                <h2>Content #1 here</h2>
                <ul>                
                {one.map((res, i)=> {return <Post post={res} commentHandler={this.handleComments(res._id)} key={i}/>})}
                </ul>
              </Tabs.Panel>

              <Tabs.Panel title='Category #2'>
                <h2>Content #2 here</h2>
                <ul>
                {two.map((result,i)=>{
                    // console.log(result._id)
                    // console.log('i: ', i._id)
                    return <div key={i} className='well'>
                      <h5>Title: {result.title}</h5>
                      <p>Post: {result.location} - {result.condition}</p> 
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

            </Tabs>
            </div>

          {/* Submit new Post to Forum */}
            <div>
              <button onClick={this.handleOpenModal}>Add Post</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example">
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
                      <input type='hidden' name='condition' value={this.props.params.condition} onChange={this.handleInputChange}></input>   
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

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state=props.post;
    console.log("post state",this.state);
  }

  componentDidMount(){
    axios.get(`forumpost/${this.props.post._id}`).then(res=> this.setState({comments: res.data.comments}))
  }

  receiveComment(newComm){
    console.log("newComm",newComm);
    // console.log(this.state);
    this.setState({comment:this.state.comment.concat(newComm)});
    console.log("after update",this.state);
  }

  render(){
    const result= this.props.post;
    // console.log(this.props.commentHandler);
    return (<div className='panel-body'>
            <h5>Title: {result.title}</h5>
            <h6>Author: {result.author}</h6>
            <p>Post: {result.content}</p>
              <CommentForm post={result} commentHandler={comment=>this.receiveComment(comment)}/>
            
            <h5>Comments</h5>
            {this.state.comment.map((result,i)=>{
            return (
              <div key={i}>
                 <h4>{result.username}</h4> 
                  <p>{result.comment}</p>
              </div>
                   )}
              )}
                          
              </div>)

            }
  
}

class CommentForm extends React.Component{
 constructor(props){
  super(props);
  this.state={
    username:'',
    comment:''
  }
 }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(e){
    e.preventDefault()
        commentHelp.postComment({ data: this.state, id:this.props.post._id })
        .then(res=>{console.log("commentformresponse", res)
        this.props.commentHandler(res);
      })

  }

 render(){
  const result = this.props.post;
    return ( <form onSubmit={e=> this.handleSubmit(e)}>
          <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={
          e=>this.handleInputChange(e)}>
          </input>
           <br></br> 
           <textarea type='text' name='comment' value={this.state.comment} placeholder='Comments' onChange={e=>this.handleInputChange(e)}>
           </textarea>
           <input type='hidden' name={result._id} value={result._id}>
           </input>
          { <button type="submit" >Submit</button> }
          </form>
          );
  }

}

export default Topic;
