import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouters";
import { useDispatch } from "react-redux";


const AppRouter = () => {


  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;