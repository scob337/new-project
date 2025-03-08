import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Img from "../../assets/images/Mobile.png";
import { AiOutlineGift } from "react-icons/ai";

const NewsSection = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex overflow-hidden flex-col lg:flex-row items-center justify-center min-h-[40vh] bg-[#9188F1] px-6 py-12 lg:px-20 relative">
      <motion.div
        ref={textRef}
        initial={{ x: -100, opacity: 0 }}
        animate={textInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="lg:w-1/2 text-white space-y-5 lg:text-left z-30"
      >
        <AiOutlineGift className="text-4xl text-black bg-[#E4FF3B] p-2 rounded-full" />
        <h2 className="text-3xl lg:text-5xl font-semibold font-[coolvetica]">
          Latest <span className="text-[#E4FF3B]">News</span> & Updates
        </h2>
        <p className="text-lg opacity-80 w-[60%]">
          Your Go-To Source For News, Tips, And Exclusive Offers Delivered Right
          To Your Inbox
        </p>
        <div className="flex items-center justify-center lg:justify-start space-x-2 bg-white rounded-full p-2 w-fit">
          <button className="bg-[#E4FF3B] cursor-pointer text-black font-medium px-6 py-2 rounded-full">
            Sign Up
          </button>
          <input
            type="email"
            placeholder="Agustin38@Yahoo.Com"
            className="text-gray-600 px-4 bg-transparent outline-none"
          />
        </div>
      </motion.div>

      <motion.div
        ref={imgRef}
        initial={{ y: 100, opacity: 0 }}
        animate={imgInView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.5 }}
        className="lg:w-1/2 z-20 relative"
      >
        <img
          src={Img}
          alt="Mobile Mockup"
          className="-mb-20 scale-[3] mx-auto absolute -bottom-80"
        />
      </motion.div>

      <div className="absolute w-full h-[380px] lg:h-[420px] rounded-[30px] overflow-hidden bg-[#9188F1] flex items-center justify-center z-0">
        <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full top-[-50px] left-[-40px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>
        <div className="absolute w-[320px] h-[320px] bg-white opacity-10 rounded-full bottom-[10px] right-[-10px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>
      </div>
    </div>
  );
};

export default NewsSection;
