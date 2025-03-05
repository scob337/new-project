import HeroImg from "../../assets/images/bgDesktop.png";
import { FaPlay } from "react-icons/fa";
import CustomButton from "../../Components/sharedComponents/Button";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Google from '../../assets/images/icons8-google-play-store.svg'
const HeroSection = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0 h-full">
        <img
          src={HeroImg}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/80"></div>

      <div className="relative font-[coolvetica] z-10 flex flex-col justify-center items-center h-full text-center mt-30 lg:mt-50">
        <h1 className="text-3xl font-bold leading-tight mb-1 lg:w-[40%] max-md:text-2xl">
          Transforming Wishes into Wonderful Moments.
        </h1>
        <p className="text-lg text-gray-300 mb-8 w-90 max-md:w-[80%]">
          Because every celebration tells a story let Cadonizer help you write
          yours.{" "}
        </p>

        <CustomButton>
          <div className="flex justify-between items-center w-[90%]">
            <div className="relative w-[50px] h-[85px] flex items-center justify-center">
              <div className="absolute w-[45px] h-[45px] bg-[#DBF881] opacity-40 rounded-full shadow-lg"></div>
              <div className="absolute w-[35px] h-[35px] bg-[#DBF881] opacity-40 rounded-full"></div>
              <div className="absolute w-[34px] h-[34px] bg-[#DBF881] rounded-full flex items-center justify-center">
                <FaPlay className="text-[#081C35] text-[18px] " />
              </div>
            </div>
            <span className="px-2">Watch video</span>
          </div>
        </CustomButton>

        <div className="flex flex-wrap gap-4 mt-7 max-md:justify-center">
          {/* زر Google Play */}
          <button className="flex cursor-pointer items-center gap-2 px-5 py-1 bg-black text-white rounded-full shadow-lg hover:scale-105 transition">
            <img src={Google} alt="" />
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <p className="text-lg font-semibold">Google Play</p>
            </div>
          </button>

          {/* زر App Store */}
          <button className="flex cursor-pointer items-center gap-2 px-5 py-1 bg-black text-white rounded-full shadow-lg hover:scale-105 transition">
            <FaApple className="text-2xl text-white" />
            <div className="text-left">
              <p className="text-xs">Download on the</p>
              <p className="text-lg font-semibold">App Store</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
