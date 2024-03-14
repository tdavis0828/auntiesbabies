import { StyledHeader } from '../Styles/HomeStyleSheet';
import Marquee from 'react-fast-marquee';

function Header() {
  return (
    <StyledHeader>
      <Marquee>Welcome message/Upcoming current events</Marquee>
    </StyledHeader>
  );
}

export default Header;
