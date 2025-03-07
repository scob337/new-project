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
import Questions from "./Questions/Questions";
import Contribute2 from "./Contribute2";


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
      <br/>
      <MobileMockupSlider />
      <GalleryPage />
      <BlogFeed />
      <Questions />
    </div>
  );
};

export default Home;
