import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { isAutho } = useSelector((state) => state.auth);

  const location = useLocation();

  if (location.pathname.includes("/api/auth/verify")) {
    toast.success("Verificación exitosa");
    return <Navigate to="/" />;
  }
  if (!isAutho) {
    toast.error("No tienes permisos para acceder a esta ruta");
    return <Navigate to="/" />;
  }
  return children;
};
