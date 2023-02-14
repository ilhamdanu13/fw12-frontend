/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return children;
  }
  return <Navigate to="/signin" />;
}

export default PrivateRoute;
