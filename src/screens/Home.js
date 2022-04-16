import React from "react";
import { NavBar } from "../components/organisms/NavBar";
import MainScreen from "../screens/MainScreen";
import Footer from "../components/organisms/Footer";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <MainScreen />
    </div>
  );
};

export default Home;
