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
      });
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
    return () => {

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

                {one.map((result,i)=>{
                    // console.log(result._id)
                    // console.log('i: ', i._id)
                    return <div key={i} className='panel-body'>
                      <h5>Title: {result.title}</h5>
                      <h6>Author: {result.author}</h6>
                      <p>Post: {result.content}</p>
                      
                      
                        <form>
                          <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.handleInputChange}></input>
                          <br></br> 
                          <textarea type='text' name='comment' value={this.state.comment} placeholder='Comments' onChange={this.handleInputChange}></textarea>
                          <input type='hidden' name={result._id} value={result._id}></input>
                          <button type="submit" onClick={this.handleComments(result._id)}>Submit</button> 
                          
                        </form>
                      
                      <h5>Comments</h5>
                      {result.comment.map((result,i)=>{
                      return <div key ={i}><h4>{result.username}</h4> 
                        <p>{result.comment}</p>

                        </div>
                      })}
                      
                    </div>

                  })} 

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




              {/* <Tabs.Panel title='Category #3'>
                <h2>Content #3 here</h2>
                <ul>                
                {three.map((result,i)=>{
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
              </Tabs.Panel>*/}
            </Tabs>
            </div>

          {/* Submit new Post to Forum */}
            <div>
              <button className="btn btn-open" onClick={this.handleOpenModal}>Add Post</button>
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
                      <input type='hidden' name='location' value={this.props.match.params.location} onChange={this.handleInputChange}></input>
                      <input type='hidden' name='condition' value={this.props.match.params.condition} onChange={this.handleInputChange}></input>                    </div>
                    
                    <div>
                    <input className="btn btn-primary" type='submit' value='Submit' onClick={this.handleSubmitModal}></input>
                    <button className="btn btn-default" onClick={this.handleCloseModal}>Cancel</button>
                      
                    </div>

                  </form>
                </ReactModal>
            </div>
    </div>


      
    );

  }
}

export default Topic;



