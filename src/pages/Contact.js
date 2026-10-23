import { useState } from 'react';
import '../style/Contact.css';

const PHONE_DISPLAY = '+234-9110832681';
const PHONE_LINK = '+2349110832681';
const EMAIL = 'isaiahrobson05@gmail.com';
const ADDRESS = '15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria'; // placeholder, replace with your real address

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name} via Rbonn`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-page">
      <header className="contact-head">
        <h1>Contact Us</h1>
        <p>Questions about an order or a delivery? Reach out and we will reply as soon as we can.</p>
      </header>

      <div className="contact-grid">
        <div className="contact-info">
          <a className="info-card" href={`tel:${PHONE_LINK}`}>
            <span className="info-icon" aria-hidden="true">📞</span>
            <div><h2>Phone</h2><p>{PHONE_DISPLAY}</p></div>
          </a>

          <a className="info-card" href={`mailto:${EMAIL}`}>
            <span className="info-icon" aria-hidden="true">✉️</span>
            <div><h2>Email</h2><p>{EMAIL}</p></div>
          </a>

          <div className="info-card">
            <span className="info-icon" aria-hidden="true">📍</span>
            <div><h2>Address</h2><p>{ADDRESS}</p></div>
          </div>

          <a
            className="whatsapp"
            href={`https://wa.me/${PHONE_LINK.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />

          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
