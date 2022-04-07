import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../components/organisms/NavBar";
import { EditProfileScreen } from "../screens/EditProfileScreen";
import NewPostScreen from "../screens/NewPostScreen";

export const PrivateDashboard = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/myprofile" element={<EditProfileScreen />} />
        <Route path="/newbid" element={<NewPostScreen />} />
      </Routes>
    </>
  );
};
