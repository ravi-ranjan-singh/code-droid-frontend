import { Button } from '../reused_components/reused_components';
import { createRef } from 'react';
import Input from './../input/input';
import { sendDataToServer, validateEmptyField } from './../../helperFunctions';
import './signup.css';

const nameInput = createRef();
const emailInput = createRef();
const passwordInput = createRef();
const passwordConfirmInput = createRef();

const SignUp = ({ history }) => {
  const handleSignUpClick = async (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const passwordConfirm = passwordConfirmInput.current.value;
    const data = { name, email, password, passwordConfirm };
    if (!validateEmptyField(data)) return;
    sendDataToServer(data, 'signup');
  };
  return (
    <div className="sign-up">
      <h5>
        <strong>register to start coding</strong>
      </h5>
      <form className="sign-up-form" onSubmit={handleSignUpClick}>
        <Input
          id="user_name"
          type="text"
          text="Name"
          name="name"
          ref={nameInput}
        />
        <Input
          id="email-id"
          type="email"
          text="Email"
          name="email"
          ref={emailInput}
        />
        <Input
          id="password"
          type="password"
          text="Password"
          name="password"
          ref={passwordInput}
        />
        <Input
          id="confirm-password"
          type="password"
          text="Confirm Password"
          name="passwordConfirm"
          ref={passwordConfirmInput}
        />
        <Button cls="sign-btn" text="Start Coding" />
      </form>
    </div>
  );
};

export default SignUp;
