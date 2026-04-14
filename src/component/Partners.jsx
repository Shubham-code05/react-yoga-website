import React from 'react'
import '../style/partners.css'
import partner1 from '../image/logo_01-1.png'
import partner2 from '../image/logo_02-1.png'
import partner3 from '../image/logo_03-1.png'
import partner4 from '../image/logo_04-1.png'

function Partners() {
  return (
   <section className="partners">
      <h2 className="partners-title">Our Partners</h2>
      <div className="partners-logos">
        <div className="partner-card">
          <img src={partner1} alt="Partner 1" />
        </div>
        <div className="partner-card">
          <img src={partner2} alt="Partner 2" />
        </div>
        <div className="partner-card">
          <img src={partner3} alt="Partner 3" />
        </div>
        <div className="partner-card">
          <img src={partner4} alt="Partner 4" />
        </div>
      </div>
    </section>
  )
}

export default Partners
