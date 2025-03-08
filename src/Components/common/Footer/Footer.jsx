import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Logo from "../../../assets/images/Logo.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import Google from "../../../assets/images/icons8-google-play-store.svg";
const navigation = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "FAQ",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];
const Footer = () => {
  const PlayStore =
    "https://wishew.com/_next/image?url=%2Fimg%2Fgoogle-play.webp&w=256&q=75";
  const AppStore =
    "https://wishew.com/_next/image?url=%2Fimg%2Fapp-store.webp&w=256&q=75";
  return (
    <footer className="bg-[#655CC5] text-white py-10 relative">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between">
        <div className="text-3xl flex flex-col  gap-5">
          <img src={Logo} alt=" icon" className="w-50 object-cover" />
          <div className="flex flex-col gap-2">
            <p className=" text-lg font-semibold w-60 text-[#FFFFFF">
              Cadonizer – Make Gifting Easy & Fun!
            </p>
            <p className="text-sm text-[#FFFFFF73] w-60 text-[16px]">
              Plan, organize, and share your perfect gift lists effortlessly.
            </p>
          </div>
        </div>

        <div className="flex w-[40%] justify-around flex-wrap gap-10 mt-6 md:mt-0">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm opacity-80">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="hover:underline cursor-pointer text-[#FFFFFFB2]"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Products</h4>
            <ul className="space-y-1 text-sm opacity-80">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="hover:underline cursor-pointer text-[#FFFFFFB2]"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm opacity-80">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="hover:underline cursor-pointer text-[#FFFFFFB2]"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Apps & Contact */}
        <div className="mt-6 md:mt-0 text-sm opacity-80">
          <p className="font-semibold text-start px-3">Get the App</p>

          <div className="flex flex-col gap-3 mt-2 rounded-4xl">
            <button className="flex cursor-pointer items-center gap-2 px-5 py-1 bg-black text-white rounded-full shadow-lg  transition">
              <img src={Google} alt="" />
              <div className="text-left">
                <p className="text-xs">Get it on</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </button>

            <button className="flex cursor-pointer items-center gap-2 px-5 py-1 bg-black text-white rounded-full shadow-lg  transition">
              <FaApple className="text-2xl text-white" />
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="flex justify-around items-center flex-wrap">
        <p className="text-center text-sm opacity-60 mt-8 text-[#FFFFFF]">
          Copyrite © 2025 Cadonizer. All Rights Reserved.
        </p>
        <div className="text-center  text-sm opacity-60 mt-8 text-[#FFFFFF] flex gap-5">
          <span className="p-3 ring-2 ring-white rounded-full">
            <FaFacebookF size={22} />
          </span>
          <span className="p-3 ring-2 ring-white rounded-full">
            <FaInstagram size={22} />
          </span>
          <span className="p-3 ring-2 ring-white rounded-full">
            <BsTwitterX size={22} />
          </span>
          <span className="p-3 ring-2 ring-white rounded-full">
            <FaYoutube size={22} />
          </span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed z-50 bottom-5 right-5 bg-[#655CC5] cursor-pointer text-white p-2 rounded-full shadow-md hover:bg-[#a6a0ff] transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoIosArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
