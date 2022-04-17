import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect} from "react";
import Home from "../screens/Home";
import { PrivateRoutes } from "./PrivateRoutes";
import { UserActiveRouter } from "./UserActiveRouter";
import { PrivateDashboard } from "./PrivateDashborad";
import Footer from "../components/organisms/Footer";
import { NavBar } from "../components/organisms/NavBar";
import { useDispatch } from "react-redux";
import { startIsAuth } from "../actions/auth";


export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startIsAuth());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/api/auth/verify/:uid" element={<UserActiveRouter />} />

        <Route
          path="/*"
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
