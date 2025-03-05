import { FaGooglePlay, FaApple } from "react-icons/fa";
import Google from "../../assets/images/icons8-google-play-store.svg";

const StoreButtons = () => {
  return (
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
  );
};

export default StoreButtons;
