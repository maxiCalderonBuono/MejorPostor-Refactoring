import React from "react";

export const Logo = ({ theme, inNavbar }) => {
  return (
    <div className="flex items-center text-2xl cursor-pointer">
      <img
        src={`${
          theme === "dark"
            ? "https://res.cloudinary.com/dvqlenul5/image/upload/v1648904794/logo1_ykmcgn.png"
            : "https://res.cloudinary.com/dvqlenul5/image/upload/v1649261563/logo_white_pbwilp.png"
        }`}
        alt="Mejor postor"
        className="w-14"
      />
      <p
        className={` ${
          inNavbar ? "hidden" : "block"
        } ml-3 text-3xl md:text-4xl font-bold ${
          theme === "dark" ? "text-dark-gray" : "text-white"
        } md:block`}
      >
        Mejor postor
      </p>
    </div>
  );
};
