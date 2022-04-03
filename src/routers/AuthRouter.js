import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "../components/organisms/auth/LoginScreen";
import RegisterScreen from "../components/organisms/auth/RegisterScreen";
import AllProductListContainer from "../components/moleculs/AllProductListContainer"


const AuthRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="*" element={<LoginScreen />} />
          <Route path="AllProductListContainer" element={<AllProductListContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthRouter;
