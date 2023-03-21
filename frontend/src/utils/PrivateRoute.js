import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const authenticated = false;
  return authenticated ? <Outlet /> : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
