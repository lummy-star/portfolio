import React from 'react'
import  CV from '../../assets/CV.pdf'
const CTA = () => {
  return (
    <div className='cta'>
   <a href={CV}download className='btn'>DOWNLOAD CV</a>
   <a href="#contact" className='btn btn-primary'>LET'S TALK</a>

    </div>
  )
}

export default CTA