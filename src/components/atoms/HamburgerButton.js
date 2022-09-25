import React from "react";

export const HamburgerButton = ({ action, setShowMenu }) => {
  return (
    <button
      className="flex items-center justify-center w-6 h-6 focus:outline-none md:hidden"
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <div className="w-5 transform ">
        <span
          className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out" ${
            action ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`block absolute  h-0.5 w-5 text-white bg-current   transform transition duration-500 ease-in-out" ${
            action ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block absolute  h-0.5 w-5 text-white bg-current transform  transition duration-500 ease-in-out" ${
            action ? "-rotate-45" : " translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
};
