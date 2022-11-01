import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import NewForm from './NewForm'
import { Link } from 'react-router-dom'
export default class New extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }
  handleClose = () => {
    this.setState({ show: false })
    window.location.href = process.env.REACT_APP_FRONT
  }

  handleSave = () => {


  }
  closeModalHandle = () => {

    this.handleClose()

  }


  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewForm onCloseModal={this.closeModalHandle} />
          </Modal.Body>
          <Modal.Footer>
            <Link to="/" className="nav-link">
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
