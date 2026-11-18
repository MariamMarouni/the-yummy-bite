import { useState } from 'react'
import '../css/ContactUs.css'

const Contact = () => {

  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    feedback: ''
  })

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Thank you for your message! 💗')

    setMessage({
      name: '',
      email: '',
      subject: '',
      feedback: ''
    })
  }

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>We'd Love to Hear From You 💗</h1>
        <p>
          Have a question or want to share your experience?
          Send us a message!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>

        <h2>Contact Us 🎀</h2>

        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={message.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={message.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Subject</label>
        <select
          name="subject"
          value={message.subject}
          onChange={handleChange}
          required
        >
          <option value="">Choose a subject</option>
          <option value="Question">General Question</option>
          <option value="Feedback">Feedback</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Other">Other</option>
        </select>

        <label>Your Message</label>
        <textarea
          name="feedback"
          value={message.feedback}
          onChange={handleChange}
          placeholder="Write your message here..."
          rows="5"
          required
        />

        <button type="submit">
          Send Message 💌
        </button>

      </form>

      <p className="contact-note">
        Thank you for being part of The Yummy Bite! 🧁
      </p>

    </div>
  )
}

export default Contact