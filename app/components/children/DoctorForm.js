import React from 'react';
import ReactModal from 'react-modal';
import formhelp from '../utils/formhelp.js'

class DoctorForm extends React.Component {

constructor (props) {
  super(props);
    this.state = {
      showModal: false,
      fullname: '',
      website: '',
      phonenumber: '',
      category: this.props.params.condition,
      hospital: '',
      reason: '',
      info: []
};

this.handleOpenModal = this.handleOpenModal.bind(this);
this.handleCloseModal = this.handleCloseModal.bind(this);
this.handleSubmitModal = this.handleSubmitModal.bind(this);
this.handleInputChange = this.handleInputChange.bind(this);
}
componentDidMount () {
  formhelp.showInfo()
    .then((data) => {
    console.log('did mount' + '' + data)
    this.setState({
    info: data
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
  });
  formhelp.postInfo(this.state)
  .then((doc) => {
//console.log(this);
  this.setState({
    info: this.state.info.concat([doc])
    });
  });
}
handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
}

render () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">DoctorForm</h3>
            </div>
            <div className="panel-body">
              <div>
                <button onClick={this.handleOpenModal}>Add Doctor</button>
                <div> 
                  {this.state.info.filter((d) => d.condition == this.props.params.condition)
                    .map((result,i)=>{
                    return
                      <div key={i}>
                        <p>Name: {result.fullname}</p>
                        <p>Website: {result.website}</p>
                        <p>Number: {result.phonenumber}</p>
                         <p>Known Hospital Affiliation: {result.hospital}</p>
                          <p>Reason for Recommendation: {result.reason}</p>
                      </div>
                   })} 
                </div>
                <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                >
                  
                  <form>
                    <div>
                      <label for="name">Name: </label>
                      <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleInputChange}></input>
                    </div>
                    <br></br>
                    <div>
                      <label for="email">Website: </label>
                      <input type="text" name="website" value={this.state.website} onChange={this.handleInputChange}></input>
                    </div>
                    <br></br>
                    <div>
                      <label for="description">Phone Number: </label>
                      <input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handleInputChange}></input>
                      <input type="hidden" name="category" value={this.props.params.condition} onChange={this.handleInputChange}></input>
                    </div>
                    <div>
                      <label for="hospital">Known Hospital Affiliation: </label>
                      <input type="text" name="hospital" value={this.state.hospital} onChange={this.handleInputChange}></input>
                    </div>
                    <div>
                      <label for="reason">Reason for Recommendation: </label>
                      <input type="text" name="reason" value={this.state.reason} onChange={this.handleInputChange}></input>
                    </div>
                    <span><button className="btn btn-primary" type="submit" onClick={this.handleSubmitModal}>
                    Submit
                    </button>
                    <button onClick={this.handleCloseModal}>Close Modal</button></span>
                  </form>
                </ReactModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default DoctorForm

