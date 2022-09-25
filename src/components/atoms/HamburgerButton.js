import React from "react";

export const HamburgerButton = ({ action, setShowMenu }) => {
  return (
    <button
      class="w-6 h-6 flex justify-center items-center focus:outline-none md:hidden"
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <div class=" w-5 transform">
        <span
          class={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out" ${
            action ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          class={`block absolute  h-0.5 w-5 text-white bg-current   transform transition duration-500 ease-in-out" ${
            action ? "opacity-0" : ""
          }`}
        ></span>
        <span
          class={`block absolute  h-0.5 w-5 text-white bg-current transform  transition duration-500 ease-in-out" ${
            action ? "-rotate-45" : " translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
};
