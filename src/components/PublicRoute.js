/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return <Navigate to="/homepage" />;
  }
  return children;
}

export default PublicRoute;
