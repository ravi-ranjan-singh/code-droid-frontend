import { Link } from 'react-router-dom';
import { NavBarLinks } from '../reused_components/reused_components';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <span className="navbar-brand">🅲🅾🅳🅴🅳🆁🅾🅸🅳</span>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <NavBarLinks path="/" text="Home" />
          {localStorage.getItem('jwt') === '' ? (
            <NavBarLinks path="/login" text="Login" />
          ) : (
            <>
              <NavBarLinks path="/dashboard" text="Dashboard" />
              <NavBarLinks path="/logout" text="Logout" />
            </>
          )}
          <NavBarLinks path="/about" text="About Us" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
