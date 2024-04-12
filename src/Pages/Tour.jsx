import { useState, useRef } from 'react';
import { StyledTour } from '../Styles/TourStylesheet';
import emailjs from '@emailjs/browser';

function Tour() {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comments, setComments] = useState('');
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sktr7g1',
        'template_rtpmphj',
        form.current,
        'uHBGQxiG0Tp_1kI1r'
      )
      .then(
        (result) => {
          console.log(result.text);
          setParentName('');
          setChildName('');
          setChildAge('');
          setDate('');
          setTime('');
          setPhoneNumber('');
          setEmail('');
          setComments('');
          // setShowAlert(true);

          // setTimeout(() => {
          //   setShowAlert(false);
          // }, 3000);
        },

        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <StyledTour>
      <div className="header">
        <div className="overlay" />
        <p>Schedule a tour</p>
      </div>

      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="parantName"
            placeholder="Parent Name"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
          />
        </div>
        <div className="child-info">
          <input
            type="text"
            name="childName"
            placeholder="Childs Name"
            className="childName"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            required
          />
          <input
            type="number"
            name="childAge"
            placeholder="Age"
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            className="childAge"
            min={0}
            max={15}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="date"
          />
          <input
            type="time"
            name="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <textarea
            name="comments"
            value={comments}
            placeholder="Comments"
            onChange={(e) => setComments(e.target.value)}
            className="comments"
          />
        </div>
        <div>
          <label htmlFor="certification">
            <input
              type="checkbox"
              name="certification"
              className="cert"
              required
            />
            Child will be present for the tour
          </label>
        </div>
        <button type="submit">Request a tour</button>
      </form>
    </StyledTour>
  );
}

export default Tour;
