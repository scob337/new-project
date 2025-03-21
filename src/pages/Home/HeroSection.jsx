import HeroImg from "../../assets/images/bgDesktop.png";
import { FaPlay } from "react-icons/fa";
import CustomButton from "../../Components/sharedComponents/Button";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Google from "../../assets/images/icons8-google-play-store.svg";
const HeroSection = () => {
  return (
    <div className="relative w-[100vw] h-screen   text-white overflow-hidden">
      <div className="absolute inset-0 h-full">
        <img
          src={HeroImg}
          loading="lazy"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/80"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-35 lg:mt-43 gap-3">
        <div>
          <h1 className="w-[360px] h-[90px] leading-[45px] text-[40px] text-center font-[400] lg:w-[450px] lg:h-[114px] lg:text-[50px] lg:leading-[57px] m-auto xl:w-[500px] xl:h-[132px] xl:leading-[66px] xl:text-[60px] xl:font-[coolvetica]">
            Your Event, Perfectly Planned
          </h1>
          <p className="w-[351px] h-[78px] text-[22px] text-center leading-[26px] text-gray-300 font-[500] lg:w-[627px] lg:h-[64px] lg:text-[24px] lg:leading-[32px] xl:w-[627px] xl:h-[84px] xl:text-[30px] xl:leading-[42px]">
            From Dream to Reality—RSVPs, Wish Lists & Memories Made Easy with
            Cadonizer.
          </p>
        </div>

        <CustomButton>
          <div className="flex justify-between items-center w-[151px] h-[46.6px]">
            <div className="relative w-[50px] h-[85px] flex items-center justify-center">
              <div className="absolute w-[45px] h-[45px] bg-[#DBF881] opacity-40 rounded-full shadow-lg"></div>
              <div className="absolute w-[35px] h-[35px] bg-[#DBF881] opacity-40 rounded-full"></div>
              <div className="absolute w-[34px] h-[34px] bg-[#DBF881] rounded-full flex items-center justify-center">
                <FaPlay
                  className="text-[#081C35] text-[18px]"
                  aria-label="Play Video"
                />
              </div>
            </div>
            <span className="w-[87.3px] h-[10.1px] text-[14px] leading-[100%]">
              Watch video
            </span>
          </div>
        </CustomButton>

        <div className="w-[306px] h-[46.56px] flex mt-5 gap-3 lg:w-[414px] lg:h-[63px]">
          <button
            className="flex px-1 cursor-pointer items-center bg-black text-white w-[147.82px] h-[46.56px] rounded-[50px] lg:w-[200px] lg:h-[63px]"
            aria-label="Download on Google Play"
          >
            <img
              src={Google}
              alt="Google Play Store"
              className="w-[45.63px] h-[25.66px]"
            />
            <div className="text-left flex flex-col gap-1">
              <p className="w-[87.22px] h-[8.87px] font-[400] text-[11px] leading-[100%] text-[#FFFFFF] lg:w-[118px] lg:h-[12px] lg:text-[14px]">
                Get it on
              </p>
              <p className="w-[87.21px] h-[8.86px] leading-[100%] text-[13px] font-[600] lg:w-[118px] lg:h-[12px] lg:text-[18px]">
                Google Play
              </p>
            </div>
          </button>

          <button
            className="flex gap-2 px-1 cursor-pointer items-center bg-black text-white w-[147.82px] h-[46.56px] rounded-[50px] lg:w-[200px] lg:h-[63px]"
            aria-label="Download on the App Store"
          >
            <FaApple className="w-[21.59px] h-[25.13px] text-white lg:w-[29.22px] lg:h-[34px]" />
            <div className="text-left flex flex-col gap-1">
              <p className="w-[95px] h-[9px] font-[400] text-[11px] leading-[100%] text-[#FFFFFF] lg:w-[118px] lg:h-[12px] lg:text-[14px]">
                Download on the
              </p>
              <p className="w-[73.17px] h-[8.86px] leading-[100%] text-[13px] font-[600] lg:w-[99px] lg:h-[12px] lg:text-[17px]">
                App Store
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
