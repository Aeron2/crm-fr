import React, { useState } from 'react';
import './entry.css';
import { Jumbotron } from 'react-bootstrap';
import LoginComp from '../../components/login/LoginComp';
import ResetPassword from '../../components/password-reset/PasswordReset';
function EntryPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [frmLoad, setFrmLoad] = useState('login');
  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnResetSubmit = (e) => {
      e.preventDefault();
      if (!email) {
        return alert('Enter Email');

        //call api for reset
      }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Fill Up the complete form!!');

      //call api for submission of password
    }
  };
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        {frmLoad === 'login' && (
          <LoginComp
            handleOnChnage={handleOnChnage}
            email={email}
            password={password}
            handleSubmit={handleSubmit}
            formSwitcher={formSwitcher}
          />
        )}

        {frmLoad === 'reset' && (
          <ResetPassword
            handleOnChnage={handleOnChnage}
            email={email}
            password={password}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
          />
        )}
      </div>
    </div>
  );
}

export default EntryPage;
