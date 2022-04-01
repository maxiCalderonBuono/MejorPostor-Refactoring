import React from "react";

import { NavBar } from "./components/organisms/NavBar";
import ProductListContainer from "./components/moleculs/Cards/ProductListContainer";

import "swiper/css/bundle";

function App() {
  return (
    <>
      <NavBar />
      <ProductListContainer />
    </>
  );
}

export default App;
