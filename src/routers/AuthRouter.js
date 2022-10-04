import React from "react";
import { Routes, Route } from "react-router-dom";
import { EmailVerificationPage } from "../pages/EmailVerificationPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

const AuthRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="login" element={<EmailVerificationPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthRouter;
