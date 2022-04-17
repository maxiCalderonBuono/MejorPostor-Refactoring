import React from "react";

import { Routes, Route } from "react-router-dom";
import { EditProfileScreen } from "../screens/EditProfileScreen";
import { MyAuctionsScreen } from "../screens/MyAuctionsScreen";
import { MyBidsScreen } from "../screens/MyBidsScreen";
import NewPostScreen from "../screens/NewPostScreen";


export const PrivateDashboard = () => {
  return (
      <Routes>
        <Route path="/myprofile" element={<EditProfileScreen />} />
        <Route path="/newbid" element={<NewPostScreen />} />
        <Route path="/myauctions" element={<MyAuctionsScreen />} />
        <Route path="/mybids" element={<MyBidsScreen />} />
        
      </Routes>
  );
};
