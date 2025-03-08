import { motion } from "framer-motion";
import Image from "../../assets/images/dreamers.png";
import Image2 from "../../assets/images/Dreamer1.jfif";
import Image3 from "../../assets/images/Dreamer2.jfif";
import IconImage from "../../assets/images/Dreamer3.jfif";
import StoreButtons from "../../Components/sharedComponents/StoreButtons";
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
        <StoreButtons />
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
