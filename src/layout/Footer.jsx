import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src='logo_footer1.png' width ={122} height ={39} alt='logo_footer'/>
        </div>

        <div className='footer_text'>
           © 2020 kasa. All rights reserved
        </div>
    </div>
  )
}

export default Footer