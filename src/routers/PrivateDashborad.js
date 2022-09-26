import React from "react";
import { Routes, Route } from "react-router-dom";
import { EditProfileScreen } from "../pages/EditProfileScreen";
import { MyAuctionsScreen } from "../pages/MyAuctionsScreen";
import { MyBidsScreen } from "../pages/MyBidsScreen";
import NewPostScreen from "../pages/NewPostScreen";
import ProductDetailContainer from "../components/moleculs/ProductDetailContainer";
import { NavBar } from "../components/organisms/NavBar";
import Footer from "../components/organisms/Footer";

export const PrivateDashboard = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/myprofile" element={<EditProfileScreen />} />
        <Route path="/newbid" element={<NewPostScreen />} />
        <Route path="/myauctions" element={<MyAuctionsScreen />} />
        <Route path="/mybids" element={<MyBidsScreen />} />
        <Route path="/producto/:_id" element={<ProductDetailContainer />} />
      </Routes>
      <Footer />
    </>
  );
};
