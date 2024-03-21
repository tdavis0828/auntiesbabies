import { useState } from 'react';
import { StyledAgeRange } from '../Styles/HomeStyleSheet';
import babyBottle from '../images/baby-bottle.png';
import schoolHouse from '../images/kindergarten.png';
import preschool from '../images/boy.png';

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
        <h1>Toddlers</h1>
        <p>12 months - 3 years</p>
        <img src={babyBottle} alt="baby bottle" />
        <div className={isOneOpen ? 'back open' : 'back'}>
          <p>testing</p>
        </div>
      </div>
      <div
        className="card four"
        onMouseEnter={() => setIsTwoOpen(true)}
        onMouseLeave={() => setIsTwoOpen(false)}
      >
        <h1>Toddlers</h1>
        <p>12 months - 3 years</p>
        <img src={babyBottle} alt="baby bottle" />
        <div className={isTwoOpen ? 'back open' : 'back'}>
          <p>testing</p>
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
          <p>testing</p>
        </div>
      </div>
      <div
        className="card three"
        onMouseEnter={() => setIsFourOpen(true)}
        onMouseLeave={() => setIsFourOpen(false)}
      >
        <h1>School aged</h1>
        <p>5-12 years</p>
        <img src={schoolHouse} alt="school house" />
        <div className={isFourOpen ? 'back open' : 'back'}>
          <p>testing</p>
        </div>
      </div>
    </StyledAgeRange>
  );
}

export default AgeRange;
