import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ConfirmModal extends React.Component {
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
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Button onClick = {this.props.delete}>Delete Book</Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ConfirmModal;
