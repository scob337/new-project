import React from "react";
import HeroSection from "./HeroSection";
import FrameSection from "./FrameSection";
import Dreamers from "./Dreamers";
import Wish from "./Wish";
import Contribute from "./Contribute";
import Testimonials from "./Testimonials/Testimonials";
import WorkDesign from "./WorkDesign/WorkDesign";
import MobileMockupSlider from "./VideoSliders/Slider";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FrameSection />
      <Dreamers />
      <Wish />
      <Contribute />
      <Testimonials />
      <WorkDesign />
      <MobileMockupSlider/>
    </>
  );
};

export default Home;
