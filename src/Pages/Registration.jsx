import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { StyledRegistration } from '../Styles/RegistrationStylesheet';

function Registration() {
  const month = new Date().getMonth();
  const day = new Date().getDay();
  const year = new Date().getFullYear();

  const [parentName, setParentName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipCode, setZipCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [childName, setChildName] = useState();
  const [childAge, setChildAge] = useState();
  const [childBirthday, setChildBirthday] = useState();
  const [desiredHours, setDesiredHours] = useState();
  const [customDesiredHours, setCustomDesiredHours] = useState();
  const [daysOfTheWeek, setDaysOfTheWeek] = useState();
  const [customDaysOfTheWeek, setCustomDaysOfTheWeek] = useState();
  const [attendingSchool, setAttendingSchool] = useState();
  const currentDate = `${month}/${day}/${year}`;
  const currentTime = '';
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sktr7g1',
        'template_6iyh2we',
        form.current,
        'uHBGQxiG0Tp_1kI1r'
      )
      .then(
        (result) => {
          console.log(result.text);
          setParentName('');
          setEmail('');
          setAddress('');
          setCity('');
          setState('');
          setZipCode('');
          setPhoneNumber('');
          setChildName('');
          setChildAge('');
          setChildBirthday('');
          setDesiredHours('');
          setDaysOfTheWeek('');
          setAttendingSchool('');
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
    <StyledRegistration>
      <div className="header">
        <div className="overlay" />
        <p>Registration</p>
      </div>
      <div className="form-container">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="parent-info">
            <input
              type="text"
              name="parentName"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Parent Name"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="address">
            <input
              type="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
            />
            <select
              name="state"
              value={state}
              onInput={(e) => setState(e.target.value)}
              required
            >
              <option value="/">Select a state</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>

            <input
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Zip Code"
              required
            />
          </div>

          <div className="child-info">
            <input
              type="text"
              name="childName"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Childs Name"
              required
            />
            <select
              name="childAge"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              required
            >
              <option value="">Childs Age</option>
              <option value="under 1">Under 1</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
            </select>
            <input
              type="date"
              name="childBirthday"
              value={childBirthday}
              onChange={(e) => setChildBirthday(e.target.value)}
              required
            />
          </div>

          <div className="frequency-info">
            <select
              name="daysOfTheWeek"
              value={daysOfTheWeek}
              onChange={(e) => {
                setDaysOfTheWeek(e.target.value);
              }}
              required
            >
              <option value="/">What days of the week do you need care?</option>
              <option value="mon-fri">Mon-Fri</option>
              <option value="weekends">Weekends</option>
              <option value="custom">Custom</option>
            </select>
            {daysOfTheWeek === 'custom' && (
              <input
                type="text"
                value={customDaysOfTheWeek}
                onChange={(e) => setCustomDaysOfTheWeek(e.target.value)}
                placeholder="ex. Monday, Thursday, Saturday"
              />
            )}
            <select
              name="desiredHours"
              value={desiredHours}
              onChange={(e) => setDesiredHours(e.target.value)}
              required
            >
              <option value="/">What time do you need care?</option>
              <option value="mornings">Mornings</option>
              <option value="afternoons">Afternoons</option>
              <option value="work hours">Work Hours</option>
              <option value="nights">Nights</option>
              <option value="custom">Custom</option>
            </select>
            {desiredHours === 'custom' && (
              <input
                type="text"
                value={customDesiredHours}
                onChange={(e) => setCustomDesiredHours(e.target.value)}
                placeholder="ex. 6am-12pm"
              />
            )}
          </div>

          <div>
            <fieldset>
              <legend>Is your child currently attending school?</legend>
              <select
                name="attendingSchool"
                value={attendingSchool}
                onChange={(e) => setAttendingSchool(e.target.value)}
                required
              >
                <option value="/">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </fieldset>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledRegistration>
  );
}

export default Registration;
