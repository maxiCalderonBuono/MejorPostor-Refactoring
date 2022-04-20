import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
  let location = useLocation();
  const from = location.state ? location.state.from : "/";

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return children;
  } else {
    return <Navigate to={from} />;
  }
};
