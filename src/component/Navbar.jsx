import React from 'react'
import '../style/navbar.css'


function Navbar() {
  return (
   <header>
      <div className="header-content">
        <nav>
          <ul>
            <li><a href="#landing">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#exercise">General Exercise</a></li>
            <li><a href="#strength">Strength &amp; Bodybuilding</a></li>
            <li><a href="#yoga">Yoga</a></li>
            <li><a href="#meditation">Meditation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
