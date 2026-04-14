import React from 'react'
import '../style/navbar.css'


function Navbar() {
  return (
   <header>
      <div className="header-content">
        <h1>Yoga Studio <span>Landing Page</span></h1>
        <nav>
          <ul>
            <li><a href="#landing">Landing</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About</a></li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
