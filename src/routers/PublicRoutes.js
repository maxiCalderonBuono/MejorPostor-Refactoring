import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

export const PublicRoutes = ({ children }) => {
  const { status } = useAuthStore();

  return status === "authenticated" ? <Navigate to="/" /> : children;
};
