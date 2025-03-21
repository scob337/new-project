import React from "react";

const MobileMockup = ({ children }) => {
  return (
    <div className="relative
      w-[200px] h-[400px]  md:w-[300px] max-md:z-50
      md:h-[500px] lg:w-[300px] lg:h-[650px]
       bg-black rounded-[40px] border-[10px] border-gray-900 shadow-2xl overflow-hidden z-10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-lg md:w-24 md:h-5"></div>
      {children}
    </div>
  );
};

export default MobileMockup;
