import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const PlayStore =
    "https://wishew.com/_next/image?url=%2Fimg%2Fgoogle-play.webp&w=256&q=75";
  const AppStore =
    "https://wishew.com/_next/image?url=%2Fimg%2Fapp-store.webp&w=256&q=75";
  return (
    <footer className="bg-[#655CC5] text-white py-10 relative">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between">
        {/* Left Side - Logo & Social Media */}
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span className="text-4xl">🌀</span> Cadonizer
          </h2>
          <p className="text-sm opacity-80">CONNECTED HEARTS, CALM MINDS</p>
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="cursor-pointer hover:opacity-80 text-xl" />
            <FaTwitter className="cursor-pointer hover:opacity-80 text-xl" />
            <FaInstagram className="cursor-pointer hover:opacity-80 text-xl" />
            <FaYoutube className="cursor-pointer hover:opacity-80 text-xl" />
          </div>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-wrap gap-10 mt-6 md:mt-0">
          <div>
            <h4 className="font-semibold mb-2">THE COMPANY</h4>
            <ul className="space-y-1 text-sm opacity-80">
              <li className="hover:underline cursor-pointer">
                The Knot Worldwide
              </li>
              <li className="hover:underline cursor-pointer">About us</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">International</li>
              <li className="hover:underline cursor-pointer">Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">BETTER SITES</h4>
            <ul className="space-y-1 text-sm opacity-80">
              <li className="hover:underline cursor-pointer">The Bump</li>
              <li className="hover:underline cursor-pointer">The Bash</li>
              <li className="hover:underline cursor-pointer">Simply Curated</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Apps & Contact */}
        <div className="mt-6 md:mt-0 text-sm opacity-80">
          <p>Are you a vendor?</p>
          <p className="underline cursor-pointer">
            Learn how to join our marketplace
          </p>
          <p className="mt-4">One free app for everything</p>
          <div className="flex gap-3 mt-2">
            <img
              src={PlayStore}
              alt="Google Play"
              className="w-32 cursor-pointer"
            />
            <img
              src={AppStore}
              alt="App Store"
              className="w-32 cursor-pointer  p-1 rounded"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-sm opacity-60 mt-8">
        Anondal Themes © 2025. All Rights Reserved.
      </p>

      {/* Scroll to Top Button */}
      <button
        className="fixed z-50 bottom-5 right-5 bg-orange-500 cursor-pointer text-white p-2 rounded-full shadow-md hover:bg-orange-600 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoIosArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
