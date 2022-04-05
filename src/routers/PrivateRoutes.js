import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoutes = ({ children }) => {
  const { isAutho } = useSelector((state) => state.auth);

  if (!isAutho) {
    console.log(isAutho)
    alert("You are not logged in");
    return <Navigate to="/" />;
  }
  return children;
};