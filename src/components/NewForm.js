import React, { Component } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class NewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }



  }

  createBook = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;

      await axios.post(url, newBookObj);


    } catch (error) {
      console.log(error.message);
    }
  }
  submitHandle = (e) => {
    e.preventDefault();
    this.createBook({
      title: e.target.title.value,
      description: e.target.desc.value,
      available: e.target.boolean.value

    })
    this.props.onCloseModal()
  }



  render() {
    return (
      <Form onSubmit={this.submitHandle} >
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <FloatingLabel controlId="desc" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: '200px' }}
          />
        </FloatingLabel>

        <Form.Group controlId="boolean">
          <Form.Select aria-label="Default select example">
            <option >Please select available/Out of stock</option>
            <option value="true">Available</option>
            <option value="false">Out of stock</option>
          </Form.Select>
        </Form.Group>
        <Link to="/" className="nav-link">About
          <Button type='submit' variant="primary">
            Save Changes
          </Button></Link>
      </Form >
    )
  }
}
