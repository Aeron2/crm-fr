import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { loginSuccess } from '../login/loginSlice';

import { fetchNewAccessJWT } from '../../api/userApi';
// const isAuth = true;
function PrivateRoute() {
  //    return (
  //      <Route {...rest} render={() => (isAuth ? children : redirect('/'))} />
  //    );

  // return isAuth ? <>{children}</> : <Navigate to="/" />;

  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    !sessionStorage.getItem('accessJWT') &&
      localStorage.getItem('crmSite') &&
      updateAccessJWT();

    !isAuth && sessionStorage.getItem('accessJWT') && dispatch(loginSuccess());
  }, [dispatch, isAuth]);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;

//   return auth ? <Outlet /> : <Navigate to="/login" />;
