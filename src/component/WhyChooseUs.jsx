import React from 'react'
import '../style/whychooseus.css'
import yogaGirl from '../image/yoga-06.png' 

function WhyChooseUs() {
  return (
   <section className="why-choose-us">
      <div className="why-choose-us-content">
        <div className="text-section">
          <p className="section-subtitle">WHY CHOOSE US</p>
          <h2 className="section-title">
            Customized Instruction <br /> For Every Student
          </h2>
          <p className="section-description">
            Perspiciatis unde omnis iste natus sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae. 
            Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
          </p>
          <button className="join-btn">JOIN US NOW</button>
        </div>
        
        <div className="image-section">
          <img src={yogaGirl} alt="Yoga Pose" />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
