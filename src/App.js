import React from "react";
import { NavBar } from "./components/organisms/NavBar";
import ProductListContainer from "./components/organisms/ProductListContainer";

function App() {
  return (
    <div className="flex justify-center w-full h-full p-8 md:h-full bg-background_main">
      <NavBar />
      <ProductListContainer />
    </div>
  );
}

export default App;
