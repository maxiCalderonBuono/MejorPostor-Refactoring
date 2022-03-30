import React from "react";
import CardProduct from "./components/moleculs/Cards/CardProduct";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="flex justify-center w-full h-screen p-8 bg-gray-800">
      <CardProduct name= "Ferrari SF90" />
      <NavBar />
    </div>
  );
}

export default App;
