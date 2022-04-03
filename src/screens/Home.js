import React from "react";

import ProductListContainer from "../components/organisms/ProductListContainer";
import { NavBar } from "../components/organisms/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      {/* FALTAN LOS SIGUIENTES COMPONENTES

      <Novedades />
      <Último aviso />
      Mientras queda ProductoListContainer en representación.
      
      Esto sería el total del Home, y lo que puede ver la persona sin logearse/registrarse

       */}

      <ProductListContainer />
    </>
  );
};

export default Home;