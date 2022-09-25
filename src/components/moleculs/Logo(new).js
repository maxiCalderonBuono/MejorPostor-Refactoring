import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center text-2xl cursor-pointer">
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1649261563/logo_white_pbwilp.png"
        alt="Mejor postor"
        className="w-14"
      />
      <p className="hidden ml-3 text-4xl font-bold text-white md:block">
        Mejor postor
      </p>
    </div>
  );
};
