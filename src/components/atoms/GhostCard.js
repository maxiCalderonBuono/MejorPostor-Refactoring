import React from "react";

const GhostCard = () => {
  return (
    <div className="relative items-center h-96 flex flex-col w-72 rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] bg-white mx-10 mt-7 md:my-20">
      <div className="w-full h-48 bg-gray-300 rounded-[12px_12px_30px_30px]"></div>
      <div className="absolute w-5/6 h-8 bg-gray-300 top-52"></div>
      <div className="absolute w-2/4 h-8 bg-gray-300 top-64 left-6"></div>
      <div className="absolute rounded-[43px] w-3/4 h-12 bg-gray-300 bottom-3"></div>
    </div>
  );
};

export default GhostCard;
