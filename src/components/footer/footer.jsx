import React from 'react'
import './footer.css'
function footer({date}) {
  return (
    <div className='footer-small'>
          <small>Copyright © 2022 Sarova Holding Company</small>
          <p>{new Date().toDateString()}</p>
    </div>
  )
}

export default footer
