import React, { Component } from 'react'
import '../stylesheets/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-item a"><img id="first-img" src={require("../images/3.jpg")} alt=""/></div>
        <div className="grid-item b"><img src={require("../images/2.jpg")}  alt=""/></div>
        <div className="grid-item c"> <img src={require("../images/1.jpg")}  alt=""/></div>
        <div className="grid-item d"><img src={require("../images/4.jpg")}  alt=""/></div>
        <div className="grid-item e"><img src={require("../images/5.jpg")}  alt=""/></div>
      </div>
    )
  }
}
