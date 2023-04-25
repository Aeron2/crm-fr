import React, { useState } from 'react';
import './entry.css';
import { Jumbotron } from 'react-bootstrap';
import LoginComp from '../../components/login/LoginComp';
import ResetPassword from '../../components/password-reset/PasswordReset';
 const Entry = () => {
  const [frmLoad, setFrmLoad] = useState('login');

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info ">
      <div className="form-box jumbotron">
        {frmLoad === 'login' && <LoginComp formSwitcher={formSwitcher} />}

        {frmLoad === 'rest' && (
          <ResetPassword
            // handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            // email={email}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;