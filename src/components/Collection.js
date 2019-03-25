import React, { Component } from 'react'
import{ Card, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

import '../stylesheets/Collection.css'

export default class Collection extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className='collection-container'>
        <Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.props.img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.props.img2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.props.img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Link to={this.props.link} style={{color:color}} >
              <h3><strong>{this.props.name}</strong></h3>
              <p>{this.props.author}</p>
            </Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
