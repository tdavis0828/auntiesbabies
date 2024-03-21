import { useState } from 'react';
import { StyledContact } from '../Styles/ContactStylesheet';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit() {
    console.log('submitted');
  }

  return (
    <StyledContact>
      <div className="header">
        <div className="overlay" />
        <p>Contact</p>
      </div>
      <div className="container">
        <div className="info-container">
          <h2>Auntie's Babies Family Day Care</h2>
          <p>
            We are here to help and answer any questions you may have! Reach out
            to us by giving us a call or here through email.
          </p>
          <p className="hours">Hours</p>
          <p>Mon-Fri: 6:00am-7:30pm</p>
          <button>Schedule A Tour</button>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="name"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                className="subject"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="message"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;
