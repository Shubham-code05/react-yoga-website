import { useEffect, useState } from 'react'
import '../style/joinclass.css'
import hotYogaIcon from '../image/yoga-03.png'
import yinYogaIcon from '../image/yoga-04.png'
import hathaYogaIcon from '../image/yoga-05-1.png'

function JoinClass() {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/classes')
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('Unable to load classes')))
      .then(setClasses)
      .catch(() => setClasses([
        { name: 'Hot Yoga', description: 'Build strength and release tension in a warm, energizing flow.', icon: hotYogaIcon },
        { name: 'Yin Yoga', description: 'Slow down with longer holds designed to restore body and mind.', icon: yinYogaIcon },
        { name: 'Hatha Yoga', description: 'Find steady alignment through foundational poses and breathwork.', icon: hathaYogaIcon },
      ]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="join-class" id="classes">
      <div className="join-class-header">
        <h4>Our Classes</h4>
        <h2>Join A Class Today!</h2>
      </div>

      <div className="join-class-grid">
        {(loading ? [{ name: 'Loading classes...' }] : classes).map((yogaClass) => (
          <div className="class-card" key={yogaClass.name}>
            {yogaClass.icon && <img src={yogaClass.icon} alt="" />}
            <h3>{yogaClass.name}</h3>
            {yogaClass.description && <p>{yogaClass.description}</p>}
          </div>
        ))}
      </div>

      <div className="join-class-footer">
        <a href="#contact" className="view-all-btn">Book a class</a>
      </div>
    </section>
  )
}

export default JoinClass
