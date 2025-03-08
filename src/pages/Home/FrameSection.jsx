import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import MobileMockup from "../../Components/sharedComponents/MobileMockup";
import CustomButton from "../../Components/sharedComponents/Button";
import CardWithImg from "../../Components/sharedComponents/CardWithImg";

const FrameSection = () => {
  const [Muted, setMuted] = useState(true);
  const Motion = motion;
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,
    once: true,
  });

  return (
    <div className="relative py-10 lg:min-h-screen flex flex-col items-center">
      <div className="flex justify-center items-center mb-5">
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

      <div ref={ref} className="relative flex flex-col items-center w-full">
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
