import React, { Component } from 'react'
import{ Form, Button } from 'react-bootstrap';

import '../stylesheets/Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="What's your name?" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="What's your email?" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="What's the enquiry about?" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button>Submit Enquiry</Button>
        </Form>
      </div>
    )
  }
}
