import React from 'react';
import ReactModal from 'react-modal';
import formhelp from '../../utils/formhelp.js'
// import style from ''
const customModal = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
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
componentWillMount () {
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

              <h3 className="panel-title"><span><img className="doctor" src="./images/Doctor.png" alt="doctor"></img>Doctor Recommendations</span></h3>
            


            </div>
            <div className="panel-body">
          
              <div>
                <button className="btn btn-open" onClick={this.handleOpenModal}>Add Doctor</button>
                <br />
                <br />
                {/*<div>{this.state.info.fullname}</div>*/}
                
                  {confilter.map((result, i) => {
                    return <div className="well catwell" key={i}><p><strong>Name :  </strong>{result.fullname}</p><p><strong>Website:  </strong>{result.website}</p><p><strong>Phone:  </strong>{result.phonenumber}</p><p><strong>Known Hospital Affiliation:  </strong>{result.hospital}</p><p><strong>Reason for Recommendation:  </strong>{result.reason}</p></div>
                   })}
                

                  

                <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                  style={customModal}
                >
                  
                  <div className="main-content">

                    <div className="form-register-with-email">

                      <div className="form-white-background">

                        <div className="form-title-row">
                            <h1>Add a Doctor</h1>
                        </div>

                        <div className="form-row">
                            <label>
                                <span>Name</span>
                                <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleInputChange}></input>
                            </label>
                        </div>

                        <div className="form-row">
                            <label>
                                <span>Website</span>
                                <input type="text" name="website" value={this.state.website} onChange={this.handleInputChange}>
                                </input>
                            </label>
                        </div>

                        <div className="form-row">
                            <label>
                                <span>Phone Number</span>
                                <input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handleInputChange}>
                                </input>
                            </label>
                        </div>

                        <div className="form-row">
                            <label>
                                <span>Hospital Affiliation</span>
                                <input type="text" name="hospital" value={this.state.hospital} onChange={this.handleInputChange}>
                                </input>
                            </label>
                        </div>

                        <div className="form-row">
                            <label>
                                <span>Reason for Recommendation</span>
                                <input type="text" name="reason" value={this.state.reason} onChange={this.handleInputChange}>
                                </input>
                            </label>
                        </div>

                        <div className="form-row">
                          <span>
                              <button className="btn btn-primary" type="submit" onClick={this.handleSubmitModal}>
                          Submit
                          </button>

                          <button className="btn btn-default" onClick={this.handleCloseModal}>Close</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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

