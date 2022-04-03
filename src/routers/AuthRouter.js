import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "../components/organisms/auth/LoginScreen";
import RegisterScreen from "../components/organisms/auth/RegisterScreen";


const AuthRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="*" element={<LoginScreen />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthRouter;
