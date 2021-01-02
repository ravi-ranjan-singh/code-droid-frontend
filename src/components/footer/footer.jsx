import {
  ContactSpan,
  ExternalLinks,
} from './../reused_components/reused_components';
import './footer.css';
const Footer = () => {
  return (
    <>
      <div className="social-contacts">
        <div>
          <h6>Get connected with us on social networks!</h6>
        </div>
        <ul className="social-links">
          <ExternalLinks
            path="https://github.com/ravi-ranjan-singh"
            iconName="github"
          />
          <ExternalLinks
            path="https://www.linkedin.com/in/ravi-ranjan-singh/"
            iconName="linkedin"
          />
          <ExternalLinks
            path="https://www.instagram.com/raviranjansingh.rvs/"
            iconName="instagram"
          />
        </ul>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <h6 className="white-text">🅲🅾🅳🅴🅳🆁🅾🅸🅳</h6>
            <p>
              A simple tool that allows you to write, edit and run your code
              whenever and wherever you want.
            </p>
          </div>
          <div className="footer-contact">
            <h6 className="white-text">CONTACT</h6>
            <ul>
              <ContactSpan iconName="home" text="Delhi,India" />
              <ContactSpan
                iconName="envelope"
                text="singh.raviranjan6@gmail.com"
              />
              <ContactSpan iconName="phone" text="9971283649" />
            </ul>
          </div>
        </div>

        <div className="copy" style={{ textAlign: 'center' }}>
          © 2020 codedroid
        </div>
      </footer>
    </>
  );
};

export default Footer;
