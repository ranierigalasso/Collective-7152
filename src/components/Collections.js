import React, { Component } from 'react'
import Collection from './Collection';
import '../stylesheets/Collections.css';

export default class Collections extends Component {
  render() {
    return (
      <div className='collections-container'>
       <Collection 
        link='/long-distance'
        color='#255E21'
        name='Long Distance'
        author='By Lucrezia De Fazio'
        img1={require('../images/1.jpg')}
        img2={require('../images/3.jpg')}
        img3={require('../images/4.jpg')}
       />
       <Collection 
        color='rgb(122, 25, 79)'
        name='24/7'
        author='Coming Soon'
        img1={require('../images/1.jpg')}
        img2={require('../images/4.jpg')}
        img3={require('../images/3.jpg')}
       />
      </div>
    )
  }
}
