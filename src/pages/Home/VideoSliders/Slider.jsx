import React from "react";
import SliderMockup from "./SliderMockup";
import MainTitle from "../../../Components/sharedComponents/MainTitle";

const Slider = () => {
  return (
    <div className="min-h-screen my-10 flex flex-col gap-10">
      <MainTitle Title="Wish it was easy?" ColorTitle="Ahem, it is." />

      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center mb-10">
          Share your wish{" "}
        </h1>
        <p className="text-gray-400  text-lg text-center w-[50%] mx-auto">
          Tell the wishew community all about your hoppes and dreams. Open up to
          others and discover a new kind of social connection
        </p>
        <SliderMockup />
      </div>
    </div>
  );
};

export default Slider;
