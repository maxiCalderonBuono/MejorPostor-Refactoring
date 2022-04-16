import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../screens/Home";
import { PrivateRoutes } from "./PrivateRoutes";
import { UserActiveRouter } from "./UserActiveRouter";
import { PrivateDashboard } from "./PrivateDashborad";
import Footer from "../components/organisms/Footer";
import { NavBar } from "../components/organisms/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/api/auth/verify/:uid" element = {<UserActiveRouter />} />

        <Route
          path="/*"
          //"/api/auth/verify/:id"
          element={
            <PrivateRoutes>
              <PrivateDashboard />
            </PrivateRoutes>
          }
        />

        <Route path="*" element={<h1>Not Found</h1>} />
        {/*Este es un soft "Not Found", ya que al navegar va a devolver status 200 igual. El 404 debe generarse desde el servidor */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default AppRouter;
