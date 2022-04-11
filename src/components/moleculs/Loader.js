import React from "react";
import GhostCard from "../atoms/GhostCard";

const Loader = () => {
  return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center min-h-[400px] max-h-[450px]  gap-4 bg-gray-100 rounded-lg shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)]  mt-1 justify-center md:min-h-[600px] md:min-w-full  animate-pulse-fast overflow-hidden">
      <GhostCard />
      <GhostCard />
      <GhostCard />
    </div>
  );
};

export default Loader;
