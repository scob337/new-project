import React from "react";
import HeroSection from "./HeroSection";
import FrameSection from "./FrameSection";
import Dreamers from "./Dreamers";
import Contribute from "./Contribute";
import Testimonials from "./Testimonials/Testimonials";
import WorkDesign from "./WorkDesign/WorkDesign";
import MobileMockupSlider from "./VideoSliders/Slider";
import BlogFeed from "./Blog/BlogFeed";
import Questions from "./Questions/Questions";
import Contribute2 from "./Contribute2";
import BlogSlider from "./Blogs";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FrameSection />
      <Dreamers />
      <Contribute />
      <Contribute2 />
      <Testimonials />
      <WorkDesign />
      <br />
      <MobileMockupSlider />
      <BlogSlider />
      <BlogFeed />
      <Questions />
    </div>
  );
};

export default Home;
