import React, { Component } from 'react'
import{ Form, Button } from 'react-bootstrap';

import '../stylesheets/Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact-container'>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Subject" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <button className='form-btn'>
            SUBMIT
          </button>
        </Form>
      </div>
    )
  }
}
