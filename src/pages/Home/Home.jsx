import React from "react";
import HeroSection from "./HeroSection";
import FrameSection from "./FrameSection";
import Dreamers from "./Dreamers";
import Wish from "./Wish";
import Contribute from "./Contribute";
import Testimonials from "./Testimonials/Testimonials";
import WorkDesign from "./WorkDesign/WorkDesign";
import MobileMockupSlider from "./VideoSliders/Slider";
import GalleryPage from "./ImageGallary/imgGallary";
import BlogFeed from "./Blog/BlogFeed";

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
      <MobileMockupSlider />
      <GalleryPage />
      <BlogFeed/>
    </>
  );
};

export default Home;
