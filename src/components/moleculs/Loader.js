import React from "react";

const Loader = () => {
  return (
    <div className="bg-gray-100 rounded-lg min-h-[400px] md:min-h-[600px] w-full ">
      <div className= "items-center h-fit flex flex-col w-72 rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] bg-white"></div>
      <div className= "items-center h-fit flex flex-col w-72 rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] bg-white"></div>
      <div className= "items-center h-fit flex flex-col w-72 rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] bg-white"></div>
    </div>
  );
};

export default Loader;
