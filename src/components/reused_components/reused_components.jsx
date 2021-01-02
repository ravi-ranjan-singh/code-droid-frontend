import { Link } from 'react-router-dom';
export const NavBarLinks = ({ path, text }) => {
  return (
    <li>
      <Link to={path}>{text}</Link>
    </li>
  );
};

export const ContactSpan = ({ iconName, text }) => {
  return (
    <li>
      <i className={`fas fa-${iconName}`}></i>
      {text}
    </li>
  );
};

export const ExternalLinks = ({ path, iconName }) => {
  return (
    <li>
      <a href={path}>
        <i className={`fab fa-${iconName}`}></i>
      </a>
    </li>
  );
};

export const Button = ({ cls, text, handler }) => {
  return (
    <button className={`waves-light btn-large ${cls}`} onClick={handler}>
      {text}
    </button>
  );
};
