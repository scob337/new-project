import { motion } from "framer-motion";
import Image from "../../assets/images/dreamers.png";
import Image2 from "../../assets/images/Dreamer1.jfif";
import Image3 from "../../assets/images/Dreamer2.jfif";
import IconImage from "../../assets/images/Dreamer3.jfif";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Google from "../../assets/images/icons8-google-play-store.svg";
import BackGround from "../../Components/sharedComponents/BackGround";

const Contribute = () => {
  const Motion = motion;
  return (
    <div className="min-h-screen grid place-items-center gap-10 grid-cols-1 lg:grid-cols-2 w-full p-5">
      <Motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="col-span-2 lg:col-span-1 lg:w-[530px] lg:h-[450px] flex flex-col gap-5 max-lg:mb-15 px-10"
      >
        <div className="flex flex-col gap-2">
          <h1 className="w-[268px] h-[56] leading-[28px] text-[27px] max-lg:m-auto max-lg:text-center font-[400] lg:w-[412px] lg:h-[96px] lg:text-[50px] lg:leading-[48px] font-[coolvetica]">
            Your Perfect <span className="text-[#968AEF]">Gift</span>, Just a
            Click Away
          </h1>
        </div>
        <p className="text-gray-500 w-[346px] h-[150px] text-[18px] leading-[25px] font-[500] text-center  lg:w-[530px] lg:h-[222px] lg:text-[25px] lg:leading-[37px]  ">
          Forget unwanted gifts and last-minute stress. With
          <span className="text-[#00000080] font-bold">Cadonizer</span>, create
          and share your wishlist effortlessly. Get AI-powered recommendations
          and let friends contribute—no guessing, just the perfect surprise
          every time.
        </p>
        <div className="w-[306px] h-[46.56px] flex mt-5 gap-3 lg:w-[414px] lg:h-[63px]">
          <button
            className="flex  px-1 cursor-pointer items-center  bg-black text-white  w-[147.82px] h-[46.56px] rounded-[50px]
          lg:w-[200px] lg:h-[63px]
          
          "
          >
            <img
              src={Google}
              alt=""
              className="w-[45.63px] h-[25.66px]
            
            "
            />
            <div className="text-left flex flex-col gap-1">
              <p
                className="w-[87.22px] h-[8.87px] font-[400] text-[11px] leading-[100%] text-[#FFFFFF]
              lg:w-[118px] lg:h-[12px] lg:text-[14px]
              "
              >
                Get it on
              </p>
              <p
                className="w-[87.21px] h-[8.86px]  leading-[100%] text-[13px] font-[600]
              lg:w-[118px] lg:h-[12px] lg:text-[18px]
              "
              >
                Google Play
              </p>
            </div>
          </button>
          {/* زر App Store */}
          <button
            className="flex gap-2 px-1 cursor-pointer items-center  bg-black text-white  w-[147.82px] h-[46.56px] rounded-[50px]
          lg:w-[200px] lg:h-[63px] 
          "
          >
            <FaApple
              className="w-[21.59px] h-[25.13px]  text-white
            lg:w-[29.22px] lg:h-[34px] 
            "
            />
            <div className="text-left flex flex-col gap-1">
              <p
                className="w-[95px] h-[9px] font-[400] text-[11px] leading-[100%] text-[#FFFFFF]
              lg:w-[118px] lg:h-[12px] lg:text-[14px]
              "
              >
                Download on the
              </p>
              <p
                className="w-[73.17px] h-[8.86px]  leading-[100%] text-[13px] font-[600]
              lg:w-[99px] lg:h-[12px] lg:text-[17px]
              "
              >
                App Store
              </p>
            </div>
          </button>
        </div>
      </Motion.div>

      <div className="col-span-2 lg:col-span-1 flex justify-center items-center h-[100%] relative max-lg:mt-10">
        <div className="relative flex justify-center items-center w-[300px] lg:w-[350px] h-[550px] px-5">
          <BackGround />

          <Motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="absolute w-[280px] h-[95%] scale-[1.5] lg:scale-[2] top-[-7px] z-10 after:content-[''] after:absolute after:bottom-[85px] after:left-0 after:w-full after:h-[15%] after:bg-white"
          >
            <img
              src={Image}
              alt="Mobile UI"
              className="w-full h-full object-cover MobileUI"
            />
          </Motion.div>

          <div className="absolute left-[-40px] lg:left-[-70px] top-[32%] lg:top-[37%] w-[150px] h-[160px] lg:h-[190px] bg-white rounded-2xl shadow-lg p-2 flex flex-col gap-1 z-20">
            <img
              src={Image2}
              alt="Product"
              className="w-full h-[50%] lg:h-[60%] rounded-lg object-cover"
            />
            <p className="text-xs font-semibold">Classic White T-Shirt</p>
            <p className="text-xs text-gray-500">4.5 ★ (256.00)</p>
            <button className="bg-[#9188F1] text-white px-2 py-1 rounded-full text-[12px]">
              Add to my wish list
            </button>
          </div>

          <div className="absolute right-[-30px] bottom-5 w-[150px] h-[160px] lg:h-[190px] bg-white rounded-2xl shadow-lg p-2 flex flex-col gap-1 z-20">
            <img
              src={Image3}
              alt="Product"
              className="w-full h-[50%] lg:h-[60%] rounded-lg object-cover"
            />
            <p className="text-xs font-semibold">Trendy Switcher Top</p>
            <p className="text-xs text-gray-500">4.5 ★ (256.00)</p>
            <button className="bg-[#DBF880] text-black px-2 py-1 rounded-full text-[12px]">
              Add to my wish list
            </button>
          </div>

          <div className="absolute lg:right-[-5px] right-[5px] top-40 lg:top-30 w-[70px] h-[50px] bg-white rounded-xl shadow-md flex flex-col items-center justify-center z-20">
            <img src={IconImage} alt="Category" className="w-8 h-8" />
            <p className="text-[10px] text-gray-400">Accessoires</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
