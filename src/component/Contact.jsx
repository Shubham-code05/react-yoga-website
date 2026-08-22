import { useState } from 'react'
import '../style/contact.css'

const initialForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Sending your note...' })

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message)
      setForm(initialForm)
      setStatus({ type: 'success', message: 'Thanks. We will be in touch soon.' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-intro">
        <p className="section-subtitle">COME AS YOU ARE</p>
        <h2>Start where you are.</h2>
        <p>Tell us what you are looking for and we will help you find the right practice, pace, and people.</p>
        <a href="mailto:hello@diviyoga.studio">hello@diviyoga.studio</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          How can we help?
          <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit" disabled={status.type === 'loading'}>Send inquiry</button>
        {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
      </form>
    </section>
  )
}

export default Contact
