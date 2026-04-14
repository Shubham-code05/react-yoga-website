import React from 'react'
import '../style/joinclass.css'
import hotYogaIcon from '../image/yoga-03.png'
import yinYogaIcon from '../image/yoga-04.png'
import hathaYogaIcon from '../image/yoga-05-1.png'

function JoinClass() {
  return (
    <section className="join-class">
      <div className="join-class-header">
        <h4>Our Classes</h4>
        <h2>Join A Class Today!</h2>
      </div>

      <div className="join-class-grid">
        <div className="class-card">
          <img src={hotYogaIcon} alt="Hot Yoga" />
          <h3>Hot Yoga</h3>
          <p>
            Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa.
          </p>
        </div>

        <div className="class-card">
          <img src={yinYogaIcon} alt="Yin Yoga" />
          <h3>Yin Yoga</h3>
          <p>
            In cursus ornare sollicitudin. Ut libero urna, sollicitudin et porttitor id, tempus vitae nisl. Quisque a venenatis libero.
          </p>
        </div>

        <div className="class-card">
          <img src={hathaYogaIcon} alt="Hatha Yoga" />
          <h3>Hatha Yoga</h3>
          <p>
            Suspendisse hendrerit tincidunt metus id sollicitudin. Praesent sed sapien id arcu congue dapibus dapibus nec est.
          </p>
        </div>
      </div>

      <div className="join-class-footer">
        <a href="#all-classes" className="view-all-btn">View All</a>
      </div>
    </section>
  )
}

export default JoinClass
