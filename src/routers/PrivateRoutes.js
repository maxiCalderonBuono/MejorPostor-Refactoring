import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return children;
};
