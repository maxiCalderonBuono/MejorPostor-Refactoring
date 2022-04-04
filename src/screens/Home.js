import React from "react";
import { NavBar } from "../components/organisms/NavBar";
import MainScreen from "../screens/MainScreen";
import Footer from "../components/organisms/Footer";


const Home = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      {/* FALTAN LOS SIGUIENTES COMPONENTES

      <Novedades />
      <Último aviso />
      Mientras queda ProductoListContainer en representación.
      
      Esto sería el total del Home, y lo que puede ver la persona sin logearse/registrarse

       */}

      <MainScreen />
      <Footer />
      
    </div>
  );
};

export default Home;