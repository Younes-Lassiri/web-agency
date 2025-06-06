'use client'
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    description: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('Sending...');
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    setStatus('Message sent!');
    setForm({ name: '', email: '', budget: '', description: '' });
  } else {
    setStatus('Failed to send message.');
  }
};

  return (
    <div className="contact-section-slider" id='contact'>
    <div className="mb-16 site-section-title">
            <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">Start a project</div>
            <div className="site-section-title-gradient"></div>
    </div>
    <div className="contact-section-slide-form-infos">
        <div className="contact-section-slide-form-infos-left">
            <h1>Let us know if you want to talk about your next project!</h1>
            <p>Fill the form and start a project or, if you prefer to email us<br></br>instead... <span>tifawin@contact.com</span></p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="contact-section-slide-form-infos-right">
            <div className="contact-section-slide-form-infos-right-fill">
                <label>What&apos;s your name?</label>
                <input type='text' name='name' value={form.name} onChange={handleChange}/>
            </div>
            <div className="contact-section-slide-form-infos-right-fill">
                <label>What&apos;s your email?</label>
                <input type='email' name='email' value={form.email} onChange={handleChange}/>
            </div>
            <div className="contact-section-slide-form-infos-right-fill">
                <label>What&apos;s your budget? (Ex. $3K - $5K)</label>
                <input type='number' name='budget' value={form.budget} onChange={handleChange}/>
            </div>
            <div className="contact-section-slide-form-infos-right-fill">
                <label>Describe your project</label>
                <textarea name="description" id="" value={form.description} onChange={handleChange} cols={30} rows={5}></textarea>
            </div>
            <button type='submit'
            className="request-a-website-button"
          >
            <span>Request a website</span>
          </button>
        </div>
        <p style={{color: 'white'}}>{status}</p>
        </form>
    </div>
    </div>
  );
};

export default Contact;