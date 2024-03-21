import { StyledNavbar } from '../Styles/HomeStyleSheet';
import { Link } from 'react-router-dom';
import logo from '../images/auntiesBabiesLogo.png';

function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">
        <img src={logo} alt="Aunties babies logo" />
      </div>
      <div className="links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/" className="nav-link">
          Programs
        </Link>
        <Link to="about" className="nav-link">
          About
        </Link>
        <Link to="contact" className="nav-link">
          Contact
        </Link>
      </div>
      <div className="contact-btns">
        <Link to="/" className="nav-link tour">
          Schedule A Tour
        </Link>
        <Link to="/" className="nav-link registration">
          Registration
        </Link>
        <p className="contact-number">(661) 670-4031</p>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
