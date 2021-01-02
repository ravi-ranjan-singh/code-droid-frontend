import { createRef } from 'react';
import { Button, NavBarLinks } from '../reused_components/reused_components';
import Input from '../input/input';
import swal from 'sweetalert';
import validator from 'validator';
import { sendDataToServer, validateEmptyField } from './../../helperFunctions';
import './login.css';
import loginIcon from './../../assets/coding.png';
const emailInput = createRef();
const passwordInput = createRef();

const Login = (props) => {
  const handleLoginClick = async (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const data = { email, password };
    if (!validateEmptyField(data)) return;
    if (!validator.isEmail(data.email)) {
      swal({
        title: 'Email address is invalid',
        icon: 'warning',
      });
      return;
    }
    sendDataToServer(data, 'login', props.location.state);
  };

  return (
    <div className="login">
      <h2 className="header" style={{ textAlign: 'center' }}>
        Login
      </h2>
      <div className="card horizontal">
        <div className="card-content">
          <div className="login-icon">
            <img src={loginIcon} alt="coding" />
          </div>
          <div className="form-section">
            <form onSubmit={handleLoginClick}>
              <Input id="email" type="email" text="Email" ref={emailInput} />
              <Input
                id="password"
                type="password"
                text="Password"
                ref={passwordInput}
              />
              <Button cls="login-btn" text="Login" />
            </form>
            <ul className="login-helper">
              <NavBarLinks path="/signup" text="New User" />
              <NavBarLinks path="/forgot-password" text="Forgot Password" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
