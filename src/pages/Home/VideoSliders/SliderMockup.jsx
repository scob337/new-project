import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Video1 from "../../../assets/Videos/1.mp4";
import Video2 from "../../../assets/Videos/2.mp4";
import Video3 from "../../../assets/Videos/3.mp4";

const videos = [Video1, Video2, Video3];

const SliderMockup = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative flex items-center justify-center h-[500px] overflow-hidden">
      <button
        className={`absolute left-5 md:left-40 z-10 p-2 rounded-full transition-all ring-1 ${
          activeIndex === 0
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-400 hover:bg-[#9188F1] hover:text-white cursor-pointer"
        }`}
        onClick={() => handleSlideChange(Math.max(0, activeIndex - 1))}
        disabled={activeIndex === 0}
      >
        <IoIosArrowBack size={24} />
      </button>

      <div className="flex items-center gap-5 relative w-[900px] justify-center">
        {videos.map((video, index) => {
          let position = "opacity-50 scale-90 translate-x-0";
          if (index === activeIndex) {
            position = "opacity-100 scale-100 z-10";
          } else if (index === activeIndex - 1) {
            position = "opacity-50 scale-90 -translate-x-36";
          } else if (index === activeIndex + 1) {
            position = "opacity-50 scale-90 translate-x-36";
          }

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${position}`}
            >
              <div className="relative w-[250px] h-[500px] bg-black rounded-[40px] overflow-hidden shadow-lg flex justify-center items-center border-4 border-gray-700">
                <video
                  src={video}
                  className="w-full h-full rounded-[30px]"
                  controls={index === activeIndex}
                  autoPlay={index === activeIndex}
                  muted={index !== activeIndex}
                ></video>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className={`absolute right-10 md:right-40 z-10 p-2 rounded-full transition-all ring-1 ${
          activeIndex === videos.length - 1
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-400 hover:bg-[#9188F1] hover:text-white cursor-pointer"
        }`}
        onClick={() =>
          handleSlideChange(Math.min(videos.length - 1, activeIndex + 1))
        }
        disabled={activeIndex === videos.length - 1}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default SliderMockup;
