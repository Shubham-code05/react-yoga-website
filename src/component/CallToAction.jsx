import React from 'react'
import '../style/calltoaction.css'

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Make a Change?</h2>
        <p>
          Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc.
          Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc.
        </p>
      </div>
      <div className="cta-buttons">
        <a href="#member" className="btn-outline">BECOME A MEMBER</a>
        <a href="#class" className="btn-filled">TAKE A CLASS</a>
      </div>
    </section>
  )
}

export default CallToAction
