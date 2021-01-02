import './hero.css';
import heroImg from './../../assets/hero.png';
import SignUp from '../signup/signup';
import SignUpReplacement from '../reused_components/signUpReplacement';

const HeroSection = (props) => {
  return (
    <div className="hero-content">
      <h1 className="hero-heading">CODE AND DEPLOY IN MATTER OF SECONDS</h1>
      <h3 className="hero-subheading">
        WRITE ANYWHERE ON YOUR FAVORITE CODE EDITOR
      </h3>
      <div className="main">
        <div className="hero-img">
          <img src={heroImg} alt="hero" />
        </div>
        {localStorage.getItem('userName') ? (
          <SignUpReplacement />
        ) : (
          <SignUp {...props} />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
