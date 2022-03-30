import React from "react";
import CardProduct from "./components/moleculs/Cards/CardProduct";
import ProductListContainer from "./components/organisms/ProductListContainer";


function App() {
  return (
    <div className="flex justify-center w-full h-screen p-8 bg-gray-800">
      <ProductListContainer />
    </div>
  );
}

export default App;
