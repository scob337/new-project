import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import MobileMockup from "../../Components/sharedComponents/MobileMockup";
import CustomButton from "../../Components/sharedComponents/Button";
import CardWithImg from "../../Components/sharedComponents/CardWithImg";
import Img1 from "../../assets/images/Partner/1.png";
import Img2 from "../../assets/images/Partner/2.png";
import Img3 from "../../assets/images/Partner/3.png";
import Img4 from "../../assets/images/Partner/4.png";
import Img5 from "../../assets/images/Partner/5.png";
import Img6 from "../../assets/images/Partner/6.png";
import Img7 from "../../assets/images/Partner/7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const FrameSection = () => {
  const [Muted, setMuted] = useState(true);
  const Motion = motion;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    once: true,
  });

  return (
    <div className="relative py-10 lg:min-h-screen flex flex-col items-center gap-40">
      <div className="lg:w-[1280px] lg:h-[62.42px] flex justify-between items-start m-auto">
        <h1
          className="
          lg:w[197px] lg:h-[78px] lg:text-[40px]  lg:leading-[39px] font-[400] m-auto
        w-[121px] h-[50px] text-[24px] leading-[25px]  font-[coolvetica] pl-2
        "
        >
          Our <br />{" "}
          <span
            className="text-[#9188F1]
          
          "
          >
            partners
          </span>
        </h1>
        <div
          className="xl:w-[966.84px] xl:h-[62.42px] flex gap-1 
            lg:w-[867px] 
            w-[560px] 
            overflow-x-hidden
        "
        >
          <div className="w-full flex justify-center">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={3} // أقل عدد صور تظهر في أصغر شاشة
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="w-[90%] xl:w-[966.84px] h-auto"
            >
              <SwiperSlide>
                <img
                  src={Img1}
                  alt="Img1"
                  className="h-[74px] object-cover  m-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Img2}
                  alt="Img2"
                  className="h-[74px] object-cover  m-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Img3}
                  alt="Img3"
                  className="h-[74px] object-cover  m-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Img4}
                  alt="Img4"
                  className="h-[74px] object-cover  m-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Img5}
                  alt="Img5"
                  className="h-[74px] object-cover  m-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Img6}
                  alt="Img6"
                  className="h-[74px] object-cover  m-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="relative flex flex-col gap-10 items-center 
      lg:w-[1280px] lg:h-[947px] 
      "
      >
        <div className="flex justify-center  items-center  ">
          <CustomButton onClick={() => setMuted(!Muted)}>
            {Muted ? (
              <>
                <GiSpeakerOff size={26} /> Muted Video
              </>
            ) : (
              <>
                <GiSpeaker size={26} /> Unmute Video
              </>
            )}
          </CustomButton>
        </div>
        <div className="relative z-30">
          <MobileMockup>
            <video
              className="w-full h-[100%] object-cover object-center"
              autoPlay
              loop
              muted={Muted}
            >
              <source
                src="https://wishew.com/videos/main.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </MobileMockup>
        </div>

        <div className="relative w-full flex flex-wrap lg:flex-nowrap justify-center items-center mt-10 lg:absolute lg:w-auto">
          <Motion.div
            className="absolute  hidden lg:inline-block top-[250px] left-[-180px] rotate-[-6deg] z-20"
            initial={{ x: -200, opacity: 0 }}
            animate={
              inView ? { x: [-200, -175, -180], opacity: [0, 1, 1] } : {}
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CardWithImg title="Invitation Design" image="path/to/image1.jpg" />
          </Motion.div>

          <Motion.div
            className="absolute  hidden lg:inline-block top-[250px] right-[-200px] rotate-[6deg] z-40"
            initial={{ x: 180, opacity: 0 }}
            animate={inView ? { x: [180, 210, 200], opacity: [0, 1, 1] } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <CardWithImg title="RSVP Tracking" image="path/to/image2.jpg" />
          </Motion.div>

          <Motion.div
            className="absolute hidden lg:inline-block  top-[-10%] lg:left-[-200px]  rotate-[-6deg]"
            initial={{ x: -200, opacity: 0 }}
            animate={
              inView ? { x: [-200, -175, -180], opacity: [0, 1, 1] } : {}
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <CardWithImg
              title="Wishlist Gift Planning"
              image="path/to/image3.jpg"
            />
          </Motion.div>

          <Motion.div
            className="absolute  hidden lg:inline-block  top-[40%] right-[-200px] rotate-[6deg] z-40"
            initial={{ x: 200, opacity: 0 }}
            animate={inView ? { x: [200, 205, 200], opacity: [0, 1, 1] } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <CardWithImg
              title="AI Event Assistant"
              image="path/to/image4.jpg"
            />
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default FrameSection;
