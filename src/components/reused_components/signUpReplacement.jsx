import imgSrc from './../../assets/ide.png';
const SignUpReplacement = () => {
  return (
    <div className="main-img">
      <img src={imgSrc} alt="ide" />
      <h5 style={{ textTransform: 'uppercase', letterSpacing: 2 }}>Features</h5>
      <ul className="features-list">
        <li>User Friendly Interface</li>
        <li>Realtime Code Sharing and Editing</li>
        <li>5 Languages Supported</li>
      </ul>
    </div>
  );
};

export default SignUpReplacement;
