import React from "react";
import HeroSection from "./HeroSection";
import FrameSection from "./FrameSection";
import Dreamers from "./Dreamers";
import Wish from "./Wish";
import Contribute from "./Contribute";
import Testimonials from "./Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsHearts } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FrameSection />
      <Dreamers />
      <Wish />
      <Contribute />
      <div className="min-h-[50vh] bg-[#9188F1] px-5 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-white text-center ">
            Testimonials
          </h1>
          <p className="text-[#DAF683] font-bold text-4xl flex justify-center items-center gap-1">
            Why They love Cadonizer
            <BsHearts color="red " size={26} className="mb-3" />
          </p>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          initialSlide={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          className="pb-14 flex gap-x-10  w-full custom-swiper"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center mb-10"
            >
              <Testimonials />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
