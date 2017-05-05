import React from 'react';
import ReactModal from 'react-modal';
import Tabs from 'react-simpletabs';
import forumTable from '../../utils/forumTablehelp.js';
import commentHelp from '../../utils/commenthelp.js';
import axios from 'axios'





class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title:'',
      category:'localSupport',
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

  // componentDidMount () {
  //   console.log("mounted this.posts", this.state.posts);
  //  // this.getPosts()
  // }

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
              console.log('after submit mdoal', this.state)
            }
          });        
        })
        .catch(console.error)
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'dropdown' ? target.select : target.value;
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
        const localSupport = routeFilter.filter((c) => {return c.category == 'localSupport'});
        const hospitalDoctor = routeFilter.filter((c) => {return c.category == 'hospitalDoctor'});
        const painMgmt = routeFilter.filter((c) => {return c.category == 'painMgmt'});
        const chemo = routeFilter.filter((c) => {return c.category == 'chemo'});
        const radiation = routeFilter.filter((c) => {return c.category == 'radiation'});
        const alt = routeFilter.filter((c) => {return c.category == 'alt'});        
        
    return (    
    
      <div role='tab-pane' className="tab-pane active">

           <div className='tab-content'>

            <Tabs>
              <Tabs.Panel title='Local Support'>
                <ul>                
                {localSupport.map((res, i)=> {return <Post post={res} commentHandler={this.handleComments(res._id)} key={i}/>})}
                </ul>
              </Tabs.Panel>

              <Tabs.Panel title='Hospitals & Doctors'>
            
                <ul>
                {hospitalDoctor.map((res, i)=> {return <Post post={res} commentHandler={this.handleComments(res._id)} key={i}/>})}
                </ul>
              </Tabs.Panel>

              <Tabs.Panel title='Pain Managment'>                
                <ul>
                {painMgmt.map((res, i)=> {return <Post post={res} commentHandler={this.handleComments(res._id)} key={i}/>})}
                </ul>
              </Tabs.Panel>

            <Tabs.Panel title='Chemo Therapy'>               
                <ul>
                {chemo.map((res, i)=> {return <Post post={res} commentHandler={this.handleComments(res._id)} key={i}/>})}
                </ul>
            </Tabs.Panel>
            <Tabs.Panel title='Radiation Therapy'>               
                <ul>
                {radiation.map((res, i)=> {return <Post post={res} commentHandler={this.handleComments(res._id)} key={i}/>})}
                </ul>
            </Tabs.Panel>
            <Tabs.Panel title='Alternative Therapy'>               
                <ul>
                {alt.map((res, i)=> {return <Post post={res} commentHandler={this.handleComments(res._id)} key={i}/>})}
                </ul>
            </Tabs.Panel>
            </Tabs>            

            </div>

          {/* Submit new Post to Forum */}
            <div>
              <button className="btn btn-open" onClick={this.handleOpenModal}>Add Post</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example">
                                  
                  <div className="main-content">
                    <div className="form-register-with-email">
                      <div className="form-white-background">

                        <div className="form-title-row">
                          <h1>Add a Post</h1>
                        </div>


                        <div className="form-row">    
                          <label><span>Title: </span></label>
                          <input type ='text' name ='title' value={this.state.title} onChange={this.handleInputChange}></input> 
                        </div>
                        <div className="form-row">
                          <label><span>Category: </span></label>
                          <select name = 'category' value = {this.state.category} onChange ={this.handleInputChange}>
                            <option value='localSupport'>Local Support</option>
                            <option value='hospitalDoctor'>Hospitals & Doctors</option>
                            <option value='painMgmt'>Pain Management</option>
                            <option value='chemo'>Chemo Therapy</option>
                            <option value='radiation'>Radiation Therapy</option>
                            <option value='alt'>Alternative Therapy</option>
                          </select>
                        </div>

                        <div className="form-row">
                          <label><span>Author: </span></label>
                          <input type ='text' name ='author' value={this.state.author} onChange={this.handleInputChange}></input> 
                        </div>

                        <div className="form-row">
                          <label><span>Post: </span></label>
                          <textarea type ='text' name ='content' value={this.state.content} onChange={this.handleInputChange}></textarea> 
                        </div>

                        <div className="form-row">
                          <input type='hidden' name='location' value={this.props.params.location} onChange={this.handleInputChange}></input>
                          <input type='hidden' name='condition' value={this.props.params.condition} onChange={this.handleInputChange}></input>   
                        </div>                    
                        <div className='form-row'>
                          <span> 
                            <button className="btn btn-primary" type='submit' value='Submit' onClick={this.handleSubmitModal}>Submit</button>
                            <button className="btn btn-default" onClick={this.handleCloseModal}>Close</button>
                          </span>
                        </div>
                      </div>  
                    </div>
                  </div>
                 
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
    showModal: false,
    username:'',
    comment:''
  }
  console.log('commentform state: ', this.state)
 }

  handleOpenModal () {
    this.setState({ showModal: true });

  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
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
        this.setState({username:'', comment: '', showModal:false})
      })

  }

 render(){
  const result = this.props.post;
    return ( <div>
              <button className="btn btn-open" onClick={e=>this.handleOpenModal(e)}>Add a Comment</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example">
                  <div className="main-content">
                    <div className="form-register-with-email">
                      <div className="form-white-background">

                        <div className="form-title-row">
                          <h1>Add a Comment</h1>
                        </div>
                        <form onSubmit={e=> this.handleSubmit(e)}>
                          <div className='form-row'>
                            <label><span>Username: </span></label>
                            <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={e=>this.handleInputChange(e)}>
                            </input>
                          </div>
                          <div className='form-row'>
                            <textarea type='text' name='comment' value={this.state.comment} placeholder='Comments' onChange={e=>this.handleInputChange(e)}>
                            </textarea>
                          </div>
                          <input type='hidden' name={result._id} value={result._id}>
                          </input>
                         <button className='btn btn-primary' type="submit" >Submit</button>
                         <button className="btn btn-default" onClick={this.handleCloseModal}>Close</button>
                      </form>
                    </div>
                  </div>
                </div>
            </ReactModal>
          </div>
          );
  }

}

export default Topic;
<<<<<<< HEAD

