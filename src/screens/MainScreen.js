import React from "react";
import Novedades from "../components/organisms/Novedades";
import UltimoAviso from "../components/organisms/UltimoAviso";

const MainScreen = () => {
  return (
    <div className="flex flex-col p-8">
        <div className="flex flex-col justify-center items-center mb-20">
            <Novedades />
        </div>
        
        <div className="mt-20">
            <UltimoAviso />
        </div>
        
    </div>
  );
}
export default MainScreen;