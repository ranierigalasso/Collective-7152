import React, { Component } from 'react'
import{ Card, Carousel } from 'react-bootstrap';

import '../stylesheets/LongDistance.css';

export default class LongDistance extends Component {
  render() {
    return (
      <div className='longDistance-container'>
        <h1>Long Distance</h1>
        <p>By Lucrezia De Fazio</p>
        <Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../images/1.jpg')}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3><strong>Name of Item</strong></h3>
                <p>Short description of item..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../images/4.jpg')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3><strong>Name of Item</strong></h3>
                <p>Short description of item..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../images/5.jpg')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3><strong>Name of Item</strong></h3>
                <p>Short description of item..</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Card.Body className='longDistance-body'>
              <span>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
