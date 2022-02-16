import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div className='header'>
        <p className='logoText'>{props.logoText}</p>
        <nav>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
        </nav>
    </div>
  )
}

export default Header