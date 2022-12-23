import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}

export default PrivateRoute;
