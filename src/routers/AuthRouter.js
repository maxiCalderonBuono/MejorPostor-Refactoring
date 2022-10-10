import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { PasswordRecovery } from "../pages/PasswordRecovery";
import { RegisterPage } from "../pages/RegisterPage";

const AuthRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="password/new" element={<PasswordRecovery />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthRouter;
