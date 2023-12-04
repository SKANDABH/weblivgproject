import React from 'react'
import './Emailsub.css'
import emailback from '../assets/emailph.webp'
const Emailsub = () => {
  return (
    <div className='emailsub' style={{ backgroundImage: `url(${emailback})`,backgroundSize: 'cover' }}>
        <div className='text'>
            <p id="para">Get Exclusive Offers On Your Email</p>
            <p id="para1" >Stay Updted By Subscribing</p>
        </div>
        <div className='email'>
            
                <input type="text" placeholder='Enter your email-id'></input>
            <button className="btnemail">SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default Emailsub