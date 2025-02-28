import React, { useState } from "react";
import ImgFrame from "../../assets/images/imageFrame.webp";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

const FrameSection = () => {
  const [Muted, setMuted] = useState("true");
  return (
    <div className="relative bg-[#242A31]">
      <button
        onClick={() => setMuted(!Muted)}
        className="ring-1 ring-[#EB5C95] cursor-pointer text-white mb-2 text-center flex justify-center mx-auto py-1 px-2  rounded-[15px]"
      >
        {Muted ? (
          <>
            <GiSpeakerOff size={26} /> Muted Video
          </>
        ) : (
          <>
            <GiSpeaker size={26} />
            Unmute Video
          </>
        )}
      </button>

      <div className="relative bg-gradient-to-b from-[#242A31] to-white flex justify-center w-full  min-h-screen bg-gray-100">
        {/* Background Image - Responsive */}

        <img
          src={ImgFrame}
          alt="FrameImg"
          className="absolute top-15 w-full max-w-[95%] md:max-w-[60%] lg:max-w-[80%] h-auto object-cover"
        />

        {/* Mobile Mockup */}
        <div className="relative w-[180px] h-[430px]  md:w-[220px] md:h-[600px] lg:w-[350px] lg:h-[750px] bg-black rounded-[40px] border-[10px] border-gray-900 shadow-2xl overflow-hidden z-10">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-lg md:w-24 md:h-5"></div>

          {/* Video inside the mobile */}
          <video
            className="w-full h-[100%] object-cover object-center "
            autoPlay
            loop
            muted={Muted}
          >
            <source src="https://wishew.com/videos/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default FrameSection;
