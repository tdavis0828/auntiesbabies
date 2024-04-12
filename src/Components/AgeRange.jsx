import { useState } from 'react';
import { StyledAgeRange } from '../Styles/HomeStyleSheet';
import babyBottle from '../images/baby-bottle.png';
import schoolHouse from '../images/kindergarten.png';
import preschool from '../images/boy.png';
import toddler from '../images/baby-boy.png';

function AgeRange() {
  const [isOneOpen, setIsOneOpen] = useState(false);
  const [isTwoOpen, setIsTwoOpen] = useState(false);
  const [isThreeOpen, setIsThreeOpen] = useState(false);
  const [isFourOpen, setIsFourOpen] = useState(false);

  return (
    <StyledAgeRange>
      <div
        className="card one"
        onMouseEnter={(e) => {
          setIsOneOpen(true);
        }}
        onMouseLeave={() => setIsOneOpen(false)}
      >
        <h1>Infants</h1>
        <p> 4 - 12 months</p>
        <img src={babyBottle} alt="baby bottle" />
        <div className={isOneOpen ? 'back open' : 'back'}>
          <p>
            Our Early educators will teach your child how to enjoy learning
            through play
          </p>
        </div>
      </div>
      <div
        className="card four"
        onMouseEnter={() => setIsTwoOpen(true)}
        onMouseLeave={() => setIsTwoOpen(false)}
      >
        <h1>Toddlers</h1>
        <p>1 - 3 years</p>
        <img src={toddler} alt="baby bottle" />
        <div className={isTwoOpen ? 'back open' : 'back'}>
          <p>
            Our daycare hours are created to get toddlers ready for kindergarten
          </p>
        </div>
      </div>
      <div
        className="card two"
        onMouseEnter={() => setIsThreeOpen(true)}
        onMouseLeave={() => setIsThreeOpen(false)}
      >
        <h1>Preschoolers</h1>
        <p>3-5 years</p>
        <img src={preschool} alt="school house" />
        <div className={isThreeOpen ? 'back open' : 'back'}>
          <p>
            We provide them with games, worksheets, and other fun activities to
            help kids practice letters, numbers and more!
          </p>
        </div>
      </div>
      <div
        className="card three"
        onMouseEnter={() => setIsFourOpen(true)}
        onMouseLeave={() => setIsFourOpen(false)}
      >
        <h1>School aged</h1>
        <p>5-13 years</p>
        <img src={schoolHouse} alt="school house" />
        <div className={isFourOpen ? 'back open' : 'back'}>
          <p>
            We support after school tutoring as well as bridge the gap for early
            learners to develop social emotional skills
          </p>
        </div>
      </div>
    </StyledAgeRange>
  );
}

export default AgeRange;
