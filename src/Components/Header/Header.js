import React from 'react'
import './Header.css'
import { Routes, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <div className='header'>
        <p className='logoText'>{props.logoText}</p>
        <nav>
          <Link className='a' to='/'>Home</Link>
          <Link className='a' to='about'>About</Link>
            {/* <a href="/">HOME</a>
            <a href="#">ABOUT</a> */}
        </nav>
    </div>
  )
}

export default Header