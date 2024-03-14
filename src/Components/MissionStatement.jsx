import { StyledMissionStatement } from '../Styles/HomeStyleSheet';

function MissionStatement() {
  return (
    <StyledMissionStatement>
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1586694680938-9682c9e1f736"
          alt="/"
        />
      </div>
      <div className="statement-container">
        <h3 className="header">Our Mission</h3>
        <p className="sub-header">
          <em>Endorse. Encourage. Embolden</em>
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </p>
      </div>
    </StyledMissionStatement>
  );
}

export default MissionStatement;
