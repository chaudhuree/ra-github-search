import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (isUser ? children : <Navigate to="/login" />);
  // return (
  //   <Routes>
  //     <Route
  //       {...rest}
  //       render={() => {
  //         return isUser ? children : <Navigate to="/login" />;
  //       }}
  //     ></Route>
  //   </Routes>
  // );
};
export default PrivateRoute;
