import { useState } from 'react';
import { StyledNavbar } from '../Styles/HomeStyleSheet';
import { Link } from 'react-router-dom';
import logo from '../images/auntiesBabiesLogo.png';
import hamburger from '../images/hamburger.png';

function Navbar() {
  const [navIsOpen, setNavisOpen] = useState(true);

  return (
    <StyledNavbar className={navIsOpen ? 'open' : ''}>
      <div className="open-btn-container">
        <img
          src={hamburger}
          alt="hamburger menu button"
          onClick={() =>
            !navIsOpen ? setNavisOpen(true) : setNavisOpen(false)
          }
        />
      </div>
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
        <Link to="tour" className="nav-link tour">
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
