import React from 'react';
import cv from '../../Assets/Nur Mohammad Kawser Mern Stack Developer .pdf'

const CVD = () => {
    return (
      <div className='cta'>
          <a className='btn' href={cv} download>Download Resume</a>
          <a className='btn btn-primary' href="#contact">Let's Talk</a>
      </div>
    )
  }
export default CVD;