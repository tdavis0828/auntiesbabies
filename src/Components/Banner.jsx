import { StyledBanner } from '../Styles/HomeStyleSheet';
import Marquee from 'react-fast-marquee';

function Banner() {
  return (
    <StyledBanner>
      <Marquee>Welcome Message/News/Announcement</Marquee>
    </StyledBanner>
  );
}

export default Banner;
