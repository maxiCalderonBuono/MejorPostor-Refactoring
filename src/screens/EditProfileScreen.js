import React from "react";

import { NavBar } from "../components/organisms/NavBar";

export const EditProfileScreen = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="absolute top-20 left-0 right-0">
        <h1>Editar mi informacion</h1>
      </div>
    </div>
  );
};
