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
      condition: this.props.condition,
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
    // console.log('did mount' + '' + data)
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
    fullname: '',
    website: '',
    phonenumber: '',
    condition: '',
    hospital: '',
    reason: '',
  });
  formhelp.postInfo(this.state)
  .then((doc) => {
    console.log("this.state " + this.state)
  this.setState({

    info: this.state.info.concat([doc]),
    });
  });
}
handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  const condition = this.props.condition
  this.setState({
    [name]: value,
    condition: condition

  });
}

render () {
  // console.log("Doctor PROPS",this.props);
  const confilter = this.state.info.filter((c) => {  
        return c.condition === this.props.condition});
  return (
      <div className="row">
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">DoctorForm</h3>
            </div>
            <div className="panel-body">
          <div><h2>{this.props.condition}</h2></div>
              <div>
                <button onClick={this.handleOpenModal}>Add Doctor</button>
                <div>{this.state.info.fullname}</div>
                  {confilter.map((result, i) => {
                    return <div key={i}><p>Name : {result.fullname}</p><p>Website: {result.website}</p><p>Phone: {result.phonenumber}</p><p>Known Hospital Affiliation: {result.hospital}</p><p>Reason for Recommendation: {result.reason}</p></div>
                   })}

                <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                >
                  
                  
                    <div>
                      <label htmlFor="name">Name: </label>
                      <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleInputChange}></input>
                    </div>
                    <br></br>
                    <div>
                      <label htmlFor="email">Website: </label>
                      <input type="text" name="website" value={this.state.website} onChange={this.handleInputChange}></input>
                    </div>
                    <br></br>
                    <div>
                      <label htmlFor="description">Phone Number: </label>
                      <input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handleInputChange}></input>
                    </div>
                    <input type="hidden" name="condition" value={this.state.condition} onChange={this.handleInputChange}></input>
                    <div>
                      <label htmlFor="hospital">Known Hospital Affiliation: </label>
                      <input type="text" name="hospital" value={this.state.hospital} onChange={this.handleInputChange}></input>
                    </div>
                    <div>
                      <label htmlFor="reason">Reason for Recommendation: </label>
                      <input type="text" name="reason" value={this.state.reason} onChange={this.handleInputChange}></input>
                    </div>
                    <span><button className="btn btn-primary" type="submit" onClick={this.handleSubmitModal}>
                    Submit
                    </button>
                    <button onClick={this.handleCloseModal}>Close Modal</button></span>
                 
                </ReactModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorForm

