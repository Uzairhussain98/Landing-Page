import React from 'react'
import './Navbar.css'
import logo from './assets/xmen2.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="" className="logo" />

        <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

<button className="nav__btn"> Get Started </button>


      
    </div>
  )
}

export default Navbar
