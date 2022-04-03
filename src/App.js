import React from "react";
import { NavBar } from "./components/organisms/NavBar";
import ProductListContainer from "./components/moleculs/Cards/ProductListContainer";
import Novedades from "./components/organisms/Novedades";
import MainScreen from "./screens/MainScreen";

import "swiper/css/bundle";


function App() {
  return (
    <>
    <div className="flex felx-col justify-center w-full h-full p-8 md:h-full bg-background_main">
      <NavBar />
      <MainScreen />
    </div>
    
    </>
  );
}

export default App;
