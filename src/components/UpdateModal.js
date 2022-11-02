import React from "react";
import Modal from "react-bootstrap/Modal";
import UpdateForm from "./UpdateForm";
// import Button from "react-bootstrap/Button";

class UpdateModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          className="modal"
          centered
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <UpdateForm 
            submitUpdate = {this.props.submitUpdate}
            handleCheckbox = {this.props.handleCheckbox}
            available = {this.props.available}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateModal;
