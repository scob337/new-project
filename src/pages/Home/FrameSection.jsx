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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import B1 from "../../assets/images/b1.png";
import B2 from "../../assets/images/b2.png";
import B3 from "../../assets/images/b3.jfif";
import B4 from "../../assets/images/b4.jfif";
const cardData = [
  {
    title: "Wishlist Gift Planning",
    image: B2,
    bgColor: "#F3DE8B",
    Color: "black",
  },
  {
    title: "RSVP Tracking",
    image: B3,
    bgColor: "#F3E5DF",
    Color: "black",
  },
  {
    title: "Invitation Design",
    image: B1,
    bgColor: "#C9DFDD",
    Color: "black",
  },
  {
    title: "AI Event Assistant",
    image: B4,
    bgColor: "#C5BBF3",
    Color: "white",
  },
];

const FrameSection = () => {
  const [Muted, setMuted] = useState(true);
  const Motion = motion;
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2 });
  const IMGS = [Img1, Img2, Img3, Img4, Img5, Img6];
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
          className="xl:w-[966.84px]   flex gap-1 
            lg:w-[867px] 
            w-[560px] 
            overflow-x-hidden
        "
        >
          <div className="w-full flex justify-center">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
                1280: { slidesPerView: 7 },
              }}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="w-[90%] xl:w-[966.84px] h-auto"
            >
              {IMGS.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt="Img1"
                    className="h-[74px] object-contain  m-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div
        ref={ref1}
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
        <div className="relative z-30 ">
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
            className="absolute hidden 
            max-md:w-[250px]
            max-md:left-[100px] max-md:top-[-10px]
            md:inline-block md:top-[370px] md:left-[-250px] rotate-[-6deg] z-50"
            ref={ref1}
            initial={{ x: -300, opacity: 0 }}
            animate={inView1 ? { x: -180, opacity: 1, scale: 1.05 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <CardWithImg {...cardData[0]} />
          </Motion.div>

          <Motion.div
            className="absolute hidden lg:inline-block top-[450px] right-[-250px] rotate-[6deg] z-40"
            ref={ref2}
            initial={{ x: 300, opacity: 0 }}
            animate={inView2 ? { x: 200, opacity: 1, scale: 1.05 } : {}}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
          >
            <CardWithImg {...cardData[3]} />
          </Motion.div>

          <Motion.div
            className="absolute hidden lg:inline-block top-[50px] lg:left-[-270px] rotate-[-6deg]"
            ref={ref3}
            initial={{ x: -300, opacity: 0 }}
            animate={inView3 ? { x: -180, opacity: 1, scale: 1.05 } : {}}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
          >
            <CardWithImg {...cardData[2]} />
          </Motion.div>

          <Motion.div
            className="absolute hidden lg:inline-block top-[130px] right-[-250px] rotate-[6deg] z-40"
            ref={ref4}
            initial={{ x: 300, opacity: 0 }}
            animate={inView4 ? { x: 200, opacity: 1, scale: 1.05 } : {}}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.6,
            }}
          >
            <CardWithImg {...cardData[1]} />
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default FrameSection;
