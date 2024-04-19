import React from 'react';
import emailjs from 'emailjs-com';
import './homepage.css';


export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_o1y9zo2', 'template_4dm4bm7', e.target, 'WB5PQvQE54rvMG6a7')
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="home-contact-section" id="contact-section">
      <h2 className="main-title text-center contact-header">Contact</h2>
      <form onSubmit={sendEmail}>
        <div className='form-line'>
          <input name="from_name" placeholder="Name" className="contact-input" />
        </div>
        <div className='form-line'>
          <input name="from_mail" placeholder="Email" className="contact-input" />
        </div>  
        <div className='form-line'>
          <input
            name="mail_subject"
            placeholder="Subject"
            className="contact-input"
          />
        </div>
        <div className='form-line'>
          <textarea
            name="mail_message"
            placeholder="Message"
            className="contact-textarea"
          />
        </div>

        <div className="form-line">
          <div className="col-md-12">
            <button className="form-btn" type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  );
}
