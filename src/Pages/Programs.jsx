import { StyledPrograms } from '../Styles/ProgramsStylesheet';

function Programs() {
  return (
    <StyledPrograms>
      <div className="header">
        <div className="overlay" />
        <p>Programs</p>
      </div>
      <div className="text-container one">
        <h3>Overview</h3>
        <p>
          Our daycare hours are created to get toddlers ready for kindergarten.
          We provide them with puzzles, games, worksheets, and other fun
          activities to help kids practice letters, numbers and more! Our Early
          educators will teach your child how to enjoy learning through play and
          provide parent packages to engage the parent in the growth, learning
          and activities of the Childs day.
        </p>
      </div>
      <div className="text-container two">
        <div>
          <h4>Schedules</h4>
          <p>Full time, part time, Scheduled Drop In, Scheduled Weekends</p>
          <h4>Calendar</h4>
          <p>Full Year, Summer Care</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p>6:00AM - 12:00 AM</p>
          <h4>Languages</h4>
          <p>Dual Learning, English, Spanish</p>
        </div>
      </div>
      <div className="text-container three">
        <h4>Education Types</h4>
        <ul>
          <li>Arts-Based</li>
          <li>Creative Curriculum</li>
        </ul>
        <ul>
          <li>Bilingual</li>
          <li>Language Immersion</li>
        </ul>
        <ul>
          <li>Mixed Age (K-7th)</li>
          <li>Circle Time/Read Around</li>
        </ul>
        <ul>
          <li>Play-Based</li>
          <li>STEAM</li>
        </ul>
      </div>
      <div className="text-container four">
        <h4>Summer Program</h4>
        <p>
          We stay focused on all student academics growth and development
          throughout the summer school break. Our team is ready to spark the
          curiosity and open up the summer with lots of adventure. The summer
          program is full of activities that advance children’s learning and
          agility.
        </p>
      </div>
      <div className="text-container five">
        <h4>Activity Types</h4>
        <ul>
          <li>Field Trip Pop Ups</li>
          <li>Museums</li>
          <li>Water Parks</li>
        </ul>
        <ul>
          <li>Exhibits</li>
          <li>Summer Parties</li>
          <li>Tutoring and more!</li>
        </ul>
      </div>
    </StyledPrograms>
  );
}

export default Programs;
