import HeroImg from "../../assets/images/bgDesktop.webp";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const PlayStore =
    "https://wishew.com/_next/image?url=%2Fimg%2Fgoogle-play.webp&w=256&q=75";
  const AppStore =
    "https://wishew.com/_next/image?url=%2Fimg%2Fapp-store.webp&w=256&q=75";
  return (
    <div className="relative  h-screen text-white overflow-hidden">
      <div className="absolute inset-0 h-full">
        <img
          src={HeroImg}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-15">
        <h1 className="text-3xl font-bold leading-tight mb-4 w-80">
          Welcome to Our Awesome Website
        </h1>
        <p className="text-lg text-gray-300 mb-8 w-70">
          Discover amazing features and services that await you.
        </p>
        <a
          href="#"
          className="bg-green-500 text-gray-900
                  w-[50px] h-[50px] flex justify-center items-center
           hover:bg-green-300 rounded-full
            text-lg font-semibold transition duration-300
             ease-in-out transform  hover:shadow-lg"
        >
          <FaPlay />
        </a>
        <div className="flex gap-5 mt-10">
          <img
            src={PlayStore}
            alt="PlayStore"
            className="w-25 lg:w-50 cursor-pointer"
          />
          <img
            src={AppStore}
            alt="AppStore"
            className="w-25 lg:w-50 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
