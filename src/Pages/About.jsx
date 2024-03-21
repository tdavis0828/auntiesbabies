import { StyledAbout } from '../Styles/AboutStylesheet';
import headshot from '../images/head-shot.jpg';

function About() {
  return (
    <StyledAbout>
      <div className="image-container">
        <img src={headshot} alt="/" />
        <h4>Shanita Ford</h4>
        <p>Owner & CEO of Auntie's Babies</p>
      </div>
      <div className="content-container">
        <p>lorem ipsum</p>
      </div>
    </StyledAbout>
  );
}

export default About;
