import { StyledMissionStatement } from '../Styles/HomeStyleSheet';

function MissionStatement() {
  return (
    <StyledMissionStatement>
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1541692641319-981cc79ee10a"
          alt="/"
        />
      </div>
      <div className="statement-container">
        <h3 className="header">Our Mission</h3>

        <p className="text">
          At Auntie's Babies Family Child Care, we are deeply committed to
          maintaining a secure, wholesome, and nurturing environment where
          children can learn through play.
        </p>
        <p className="text">
          Our focus extends beyond the children to encompass the entire family
          under our care. Aunties Babies child care is dedicated to providing
          high-quality services. Since 2015 We have made a positive impact on
          the lives of many families, offering a safe and nurturing childcare
          for children so families can continue to thrive.
        </p>
      </div>
    </StyledMissionStatement>
  );
}

export default MissionStatement;
