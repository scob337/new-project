import { useState, useRef, useEffect } from "react";
import Video1 from "../../../assets/Videos/1.mp4";
import Video2 from "../../../assets/Videos/2.mp4";
import Video3 from "../../../assets/Videos/3.mp4";
import Video4 from "../../../assets/Videos/4.mp4";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const videos = [Video1, Video2, Video3, Video4];

const SliderMockup = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRefs.current.forEach((video, index) => {
            if (video) {
              if (index === activeIndex) {
                video.play();
              } else {
                video.pause();
                video.currentTime = 0;
              }
            }
          });
        } else {
          videoRefs.current.forEach((video) => {
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeIndex]);

  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div
      ref={sectionRef}
      className="relative flex items-center justify-center h-[70%] "
    >
      <button
        className={`absolute left-5 z-10 p-2   text-lg font-semibold rounded-full transition-all ${
          activeIndex === 0
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-400 hover:bg-white ring cursor-pointer"
        }`}
        onClick={() => handleSlideChange(Math.max(0, activeIndex - 1))}
        disabled={activeIndex === 0}
      >
        <IoIosArrowBack />
      </button>

      <div className="flex items-center gap-5">
        <div
          className={`hidden lg:flex w-[200px] h-[350px] justify-center items-center transition-opacity duration-500 ${
            activeIndex > 0 ? "opacity-50" : "opacity-0"
          }`}
        >
          {activeIndex > 0 && (
            <video
              src={videos[activeIndex - 1]}
              className="w-[90%] h-[90%] rounded-xl"
              muted
              loop
            ></video>
          )}
        </div>

        <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] overflow-hidden shadow-lg flex justify-center items-center border-4 border-gray-700">
          <video
            ref={(el) => (videoRefs.current[activeIndex] = el)}
            src={videos[activeIndex]}
            className="w-[90%] h-[90%] rounded-[30px] transition-all duration-500"
            controls
          ></video>
        </div>

        <div
          className={`hidden lg:flex w-[200px] h-[350px] justify-center items-center transition-opacity duration-500 ${
            activeIndex < videos.length - 1 ? "opacity-50" : "opacity-0"
          }`}
        >
          {activeIndex < videos.length - 1 && (
            <video
              src={videos[activeIndex + 1]}
              className="w-[90%] h-[90%] rounded-xl"
              muted
              loop
            ></video>
          )}
        </div>
      </div>

      <button
        className={`absolute right-5 z-10 p-2   text-lg font-semibold rounded-full transition-all ${
          activeIndex === videos.length - 1
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-400 hover:bg-white ring cursor-pointer"
        }`}
        onClick={() =>
          handleSlideChange(Math.min(videos.length - 1, activeIndex + 1))
        }
        disabled={activeIndex === videos.length - 1}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default SliderMockup;
