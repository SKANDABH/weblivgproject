import React from 'react'
import './Hero.css'
import img from '../assets/herobat.jpg'

const Hero = () => { const handleSubmit = (event) => {
    event.preventDefault();

    window.location.href = '/new-page';
  };
  return (
    <div className='hero'>
        <div className='hero-left'><img id='imgbat' src={img}alt="" /></div>

        <div className='hero-right'>        <h1>Uninterrupted Power</h1>
<h1>With Livguard</h1>
<form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <button id='herobtn'type='submit'>get in touch with us</button>
    </form> 
</div>
        
    </div>
  )
}

export default Hero