import React from 'react';
import './Header.css'
import cv from '../../Assets/Nur Mohammad Kawser Mern Stack Developer .pdf'

const CVD = () => {
    return (
      <div className='cta'>
          <a className='btn btn-primary' href={cv} download>Download Resume</a>
          <a className='btn btn-primary' href="#contact">Contact me</a>
      </div>
    )
  }
export default CVD;