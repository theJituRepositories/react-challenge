import React from 'react'
import Logo from '../../assets/sarova.jpg'
import './navbar.css'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div className='navbar-main'>
      <div className=' navbar'>
      <div className='navbar-logo'>
        <img className='navbar-logo-img' src={Logo} alt='logo picture' />
          <h2>Sarova Holdings</h2>
      </div>
        <div className='navbar-buttons'>
            <Link to={'/home-page'}>
            <button className='btn-home' >Home</button>
            </Link>
          <button className='btn-about' >About</button>
           <Link to = {'/contact-us'}>
            <button className='btn-contact-us' >Contact - Us</button>
            </Link>
            <button className='btn-highlights' >Highlights</button>
          </div>
      
      </div>
      <div className=' navbar-light'>
        <h2>Welcome to Sarova Holding  Investment Company</h2>
      </div>
      </div>
  )
}

export default navbar
