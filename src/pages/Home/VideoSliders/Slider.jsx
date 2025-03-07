import React from "react";
import SliderMockup from "./SliderMockup";

const Slider = () => {
  return (
    <div className="relative min-h-screen flex flex-col gap-10 pt-40 z-10">
      <div className="flex flex-col">
        <h1 className="text-3xl  text-center font-[coolvetica]">
          Experience the Magic of{" "}
          <span className="text-[#9188F1]">Cadonizer</span>
        </h1>
        <p className="text-gray-400 text-lg text-center w-[90%] md:w-[50%] mx-auto">
          Take a sneak peek at how simple and fun it is to wish, share, and
          receive your perfect gifts!
        </p>
      </div>
      <SliderMockup />
    </div>
  );
};

export default Slider;


