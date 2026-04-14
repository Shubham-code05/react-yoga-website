import React from 'react'
import yogaImg from '../image/yoga-01.png'
import '../style/heropage.css'

function HeroPage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Divi Yoga Studio</h2>
        <h1>Balance, Mind &amp; Body</h1>
        <p>
          Nunc consequat justo eget enim finibus porta. <br />
          Suspendisse orci nunc, rutrum quis nunc sed.
        </p>
        <a href="#get-started" className="btn">Get Started</a>
      </div>

      <div className="hero-image">
        <img src={yogaImg} alt="Yoga Illustration" />
      </div>
    </section>
  )
}

export default HeroPage
