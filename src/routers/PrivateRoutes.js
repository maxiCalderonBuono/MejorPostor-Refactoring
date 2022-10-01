import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

export const PrivateRoutes = ({ children }) => {
  const { status } = useAuthStore();

  if (status === "non-authenticated") {
    toast.error("No tienes permisos para acceder a esta ruta");
    return <Navigate to="/" />;
  }

  return children;
};
