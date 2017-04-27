import React from 'react';
import ReactModal from 'react-modal';

import formhelp from '../utils/formhelp.js'



class DoctorForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };

    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  componentDidMount () {
    formhelp.showInfo().then((data)=>{console.log('reacthelp') + data})
  }

  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }


  handleSubmit (event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
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
                    <ReactModal 
                       isOpen={this.state.showModal}
                       contentLabel="Minimal Modal Example"
                    >
                      <button onClick={this.handleCloseModal}>Close Modal</button>
                      <div>
                        <label for="name">Name: </label>

                        <input type="text" name="fullname" value="Full Name"></input>
                      </div>
                      <br></br>
                      <div>
                        <label for="email">Website: </label>
                        <input type="text" name="website" value="Website"></input>
                      </div>
                      <br></br>
                      <div>
                        <label for="description">Phone Number: </label>
                        <input type="text" name="phonenumber" value="Phone Number"></input>
                        <input type="hidden" name="category" value={this.props.disease}></input>
                      </div>
                      <button
                        className="btn btn-primary"
                        type="submit"
                      >
                        Submit
                      </button>

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
