import React from 'react'
import { useState } from 'react'
import "./Contact.css" 
const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: '',
        }) 
        
        const handleChange = (e) => {
            setContactInfo({
                ...contactInfo,
                [e.target.name]: e.target.value,
            })
            console.log(e.target.value) 
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(contactInfo)
        }

  return (
    <div className="contact">
        <h2>Contact Me</h2>
        <form className="contactForm">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={contactInfo.name} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={contactInfo.email} onChange={handleChange} />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" value={contactInfo.message} onChange={handleChange}></textarea>
            <button className="submitBtn" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Contact