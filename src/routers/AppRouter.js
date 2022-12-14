import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import { PrivateRoutes } from "./PrivateRoutes";
import { PrivateDashboard } from "./PrivateDashborad";
import { AboutUs } from "../components/organisms/aboutUs";
import AuthRouter from "./AuthRouter";
import { PublicRoutes } from "./PublicRoutes";
import { UserActiveRouter } from "./UserActiveRouter";
import { Toaster } from "react-hot-toast";

export const AppRouter = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(startIsAuth());
  // }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUS" element={<AboutUs />} />

          <Route
            path="/api/auth/verify/:userId/:uniqueString"
            element={<UserActiveRouter />}
          />

          <Route
            path="/auth/*"
            element={
              <PublicRoutes>
                <AuthRouter />
              </PublicRoutes>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoutes>
                <PrivateDashboard />
              </PrivateRoutes>
            }
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
