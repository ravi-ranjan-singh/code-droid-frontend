import { createRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavBarLinks } from '../reused_components/reused_components';
import M from 'materialize-css';
import './navbar.css';

const navRef = createRef();
const Navbar = () => {
  console.log(localStorage.getItem('here', 'jwt'));
  useEffect(() => {
    M.Sidenav.init(navRef.current);
  }, []);
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <span className="navbar-brand">🅲🅾🅳🅴🅳🆁🅾🅸🅳</span>
          </Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="fas fa-bars"></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <NavBarLinks path="/" text="Home" />
            {localStorage.getItem('jwt') === null ? (
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
      <ul className="sidenav" id="mobile-demo" ref={navRef}>
        <NavBarLinks path="/" text="Home" />
        {localStorage.getItem('jwt') === null ? (
          <NavBarLinks path="/login" text="Login" />
        ) : (
          <>
            <NavBarLinks path="/dashboard" text="Dashboard" />
            <NavBarLinks path="/logout" text="Logout" />
          </>
        )}
        <NavBarLinks path="/about" text="About Us" />
      </ul>
    </>
  );
};

export default Navbar;
