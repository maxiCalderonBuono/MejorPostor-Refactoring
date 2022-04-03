import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import AuthRouter from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth/*" element={<AuthRouter />} />

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

export default AppRouter;
