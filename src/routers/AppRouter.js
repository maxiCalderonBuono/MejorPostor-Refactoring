import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../screens/Home";
import { PrivateRoutes } from "./PrivateRoutes";
import { PrivateDashboard } from "./PrivateDashborad";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <PrivateDashboard />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
