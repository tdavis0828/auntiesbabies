import { StyledFooter } from '../Styles/HomeStyleSheet';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <div>
        <p>Auntie's Babies Family Day Care</p>
        <p>3409 Westchester Ave, Bakersfield, CA, United States, California</p>
        <p>(661) 670-4031</p>
        <p>abchildcare15@outlook.com</p>
      </div>
      <div>
        <h3>Site Map</h3>
        <Link to="/">Curriculum</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Schedule a tour</Link>
        <Link to="/">Registration</Link>
      </div>
      <div>
        <a href="/">Privacy Policy</a>
        <a href="/">Accessibility</a>
        <a href="/">Your Rights</a>
        <p>
          Designed by <a href="/">Davis Digital</a> &copy;
        </p>
        <p> All rights reserved {year}</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
