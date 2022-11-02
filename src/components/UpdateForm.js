import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ToggleButton from 'react-bootstrap/ToggleButton';

class UpdateForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.submitUpdate}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Book Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="available">
          <Form.Check type="checkbox" label="Check if book is available." checked= {this.props.available} onChange = {this.props.handleCheckbox} />
          
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Edits
        </Button>
      </Form>
    );
  }
}

export default UpdateForm;
