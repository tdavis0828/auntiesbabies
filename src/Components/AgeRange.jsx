import { StyledSectionOne } from '../Styles/HomeStyleSheet';
import babyBottle from '../images/baby-bottle.png';
import schoolHouse from '../images/kindergarten.png';
import preschool from '../images/boy.png';

function SectionOne() {
  return (
    <StyledSectionOne>
      <div className="card one">
        <h1>Toddlers</h1>
        <p>12 months - 3 years</p>
        <img src={babyBottle} alt="baby bottle" />
      </div>
      <div className="card four">
        <h1>Toddlers</h1>
        <p>12 months - 3 years</p>
        <img src={babyBottle} alt="baby bottle" />
      </div>
      <div className="card two">
        <h1>Preschoolers</h1>
        <p>3-5 years</p>
        <img src={preschool} alt="school house" />
      </div>
      <div className="card three">
        <h1>School aged</h1>
        <p>5-12 years</p>
        <img src={schoolHouse} alt="school house" />
      </div>
    </StyledSectionOne>
  );
}

export default SectionOne;
