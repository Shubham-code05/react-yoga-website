import React from 'react'
import '../style/about.css'
import aboutImg from '../image/yoga-02.png'
import userImg from '../image/WhatsApp_Image_2024-11-15_at_5.52.32_AM_optimized_50.jpeg'

function About() {
  return (
     <section className="about">
      <div className="about-content">
        <h4>About Us</h4>
        <h2>High Quality &amp; Professional <br /> Yoga Club</h2>
        <p>
          Perspiciatis unde omnis iste natus sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae. Ab illo 
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.
        </p>

        <div className="testimonial">
          <img src={userImg} alt="User" />
          <blockquote>
            “Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”
          </blockquote>
          <p className="author">Anthony Webster, CEO Yoga studio</p>
        </div>
      </div>

      <div className="about-image">
        <img src={aboutImg} alt="Yoga Illustration" />
      </div>
    </section>
  )
}

export default About
