import { motion } from "framer-motion";
import Image from "../../assets/images/mobile1.png";
import StoreButtons from "../../Components/sharedComponents/storeButtons";

const Contribute2 = () => {
  return (
    <div className="lg:min-h-[50vh]  min-h-screen grid place-items-center  gap-10 grid-cols-1 lg:grid-cols-2 w-full mb-10 ">
      <div className="col-span-2 lg:col-span-1 flex justify-center items-center h-[100%] relative max-lg:mt-10">
        <div className="relative flex justify-center items-center w-[400px] lg:w-[400px] h-[400px] px-5 overflow-hidden">
          {/* الخلفية */}
          <div className="Background absolute w-full lg:w-[400px] h-full lg:h-[420px] rounded-[30px] overflow-hidden bg-[#9188F1] flex items-center justify-center">
            {/* الصورة داخل الخلفية بمكان مضبوط */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute w-[350px] h-[95%] scale-[1.8] lg:scale-[1.9] top-[105px] left-[40px] p-2"
            >
              <img
                src={Image}
                alt="Mobile UI"
                className="w-full h-full object-cover MobileUI"
              />
            </motion.div>

            {/* الدوائر الزخرفية */}
            <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full top-[-50px] left-[-40px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>
            <div className="absolute w-[320px] h-[320px] bg-white opacity-10 rounded-full bottom-[10px] right-[-10px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>
          </div>
        </div>
      </div>

      {/* النصوص */}
      <div className="col-span-2 lg:col-span-1 h-fit lg:h-[40%] my-auto flex flex-col gap-5 px-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Why Contribute?</h1>
          <h1 className="text-[#968AEF] text-5xl font-bold">
            It's Stunning deal
          </h1>
        </div>
        <p className="text-gray-500 w-[80%]">
          Say goodbye to unwanted gifts! With Cadonizer, simply add your dream
          gifts, and your friends can contribute to make them come true. No more
          guessing—just the perfect surprise, every time!
        </p>
        <StoreButtons />
      </div>
    </div>
  );
};

export default Contribute2;
