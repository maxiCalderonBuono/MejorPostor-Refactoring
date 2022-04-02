import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoutes } from "./PrivateRoutes";
//import { PublicRoutes } from "./PublicRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
    
        
        {/*<Route
          path="/"
          element={
            <PublicRoutes>
              
            </PublicRoutes>
          }
        />*/}

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;