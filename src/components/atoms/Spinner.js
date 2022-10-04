import React from "react";

export const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="w-16 h-16 mr-2 border-8 border-dashed rounded-full border-text-primary border-top-color:transparent animate-spin-slow"></div>
      </div>
    </div>
  );
};
