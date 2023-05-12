import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (loading) {
    return <>loading</>;
  }
  if (user?.email) {
    return children;
  } else {
    return <Navigate to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;
