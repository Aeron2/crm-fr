import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const isAuth = true;
function PrivateRoute() {
  //    return (
  //      <Route {...rest} render={() => (isAuth ? children : redirect('/'))} />
  //    );

  // return isAuth ? <>{children}</> : <Navigate to="/" />;
  return isAuth ? <Outlet/> : <Navigate to="/" />;


}

export default PrivateRoute;

//   return auth ? <Outlet /> : <Navigate to="/login" />;
