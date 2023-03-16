import React from 'react';
import { Route, Navigate, redirect } from 'react-router-dom';
const isAuth = true;
function PrivateRoute({ children }) {
  //    return (
  //      <Route {...rest} render={() => (isAuth ? children : redirect('/'))} />
  //    );

  return isAuth ? <>{children}</> : <Navigate to="/" />;
}

export default PrivateRoute;

//   return auth ? <Outlet /> : <Navigate to="/login" />;
