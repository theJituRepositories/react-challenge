import React from 'react'
import Logo from '../../assets/sarova.jpg'
import './navbar.css'
function navbar() {
  return (
    <div className='navbar-main'>
      <div className=' navbar'>
      <div className='navbar-logo'>
        <img className='navbar-logo-img' src={Logo} alt='logo picture' />
          <h2>Sarova Holdings</h2>
      </div>
          <div className='navbar-buttons'>
            <button className='btn-home' >Home</button>
            <button className='btn-about' >About</button>
            <button className='btn-contact-us' >Contact - Us</button>
            <button className='btn- highlights' >Highlights</button>
          </div>
      
      </div>
      <div className=' navbar-light'>
        <h2>Welcome to Sarova Holding  Investment Company</h2>
      </div>
      </div>
  )
}

export default navbar
