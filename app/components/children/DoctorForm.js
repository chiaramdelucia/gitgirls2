import React from 'react';
import ReactModal from 'react-modal';


class DoctorForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
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
                        <label for="email">Email: </label>
                        <input type="text" name="email" value="Email"></input>
                      </div>
                      <br></br>
                      <div>
                        <label for="description">Review: </label>
                        <input type="text" name="review" value="Review"></input>
                      </div>
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
