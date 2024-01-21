import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./LoginContext";

const PrivateRoute = () => {
  let userContext = useContext(UserContext);
  return userContext.user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
