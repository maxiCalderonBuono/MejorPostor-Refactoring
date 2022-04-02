import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRouter from "./AuthRouter";

//import { DashboardRouter } from "./DashboardRouter";
//import { PrivateRoutes } from "./PrivateRoutes";
//import { PublicRoutes } from "./PublicRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthRouter />} />
      </Routes>
    </Router>
  );
};


export default AppRouter;