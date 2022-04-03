import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home"
import AuthRouter from "./AuthRouter";


//import { DashboardRouter } from "./DashboardRouter";
//import { PrivateRoutes } from "./PrivateRoutes";
//import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />

        <Route
          path="/auth/*"
          element = {<AuthRouter />}
        />

        {/*<Route
          path="/*"
          element={
            <PrivateRoutes>
              <DashboardRouter />
            </PrivateRoutes>
          }
        /> */}
      </Routes>
    </Router>
  );
};
