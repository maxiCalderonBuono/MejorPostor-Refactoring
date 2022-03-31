import React from "react";
import LoginScreen from "./components/organisms/LoginScreen";
import { NavBar } from "./components/organisms/NavBar";
import ProductListContainer from "./components/organisms/ProductListContainer";
import RegisterScreen from "./components/organisms/RegisterScreen";

function App() {
  return (
    <div className="flex justify-center w-full h-full p-8 md:h-full bg-background_main">
      {/*<NavBar />
      <ProductListContainer /> */}
      <RegisterScreen />
    </div>
  );
}

export default App;
