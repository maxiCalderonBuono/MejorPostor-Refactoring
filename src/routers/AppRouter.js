import React from "react";

const AppRouter = () => {
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
