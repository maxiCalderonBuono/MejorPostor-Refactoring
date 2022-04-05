import React from "react";
import Novedades from "../components/organisms/Novedades";
import UltimoAviso from "../components/organisms/UltimoAviso";

const MainScreen = () => {
  return (
    <div className="flex flex-col p-8">
        <div className="flex flex-col items-center justify-center mb-20">
            <Novedades />
        </div>
        
        <div>
            <UltimoAviso />
        </div>
        
    </div>
  );
}
export default MainScreen;