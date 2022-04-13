import React from "react";

const ButtonSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="w-6 h-6 mr-2 border-4 border-white border-dashed rounded-full border-top-color:transparent animate-spin-slow"></div>
      </div>
      <span> Procesando...</span>
    </div>
  );
};

export default ButtonSpinner;
