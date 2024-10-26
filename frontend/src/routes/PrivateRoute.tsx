import React, { ReactElement } from "react";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: ReactElement;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  isAuthenticated,
}) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
