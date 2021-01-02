import nfImg from './../../assets/not_found.svg';
import './notFound.css';
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-text">
        <h2>Uh Ohhh !</h2>
        <h4>We can't find the page you you are looking for 😔</h4>
      </div>
      <div className="not-found-img">
        <img src={nfImg} alt="not_found" />
      </div>
    </div>
  );
};

export default NotFound;
