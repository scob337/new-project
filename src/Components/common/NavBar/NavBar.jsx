import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../../assets/images/Logo.png";
import CustomButton from "../../sharedComponents/Button";
const navigation = [
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Tools",
    href: "#",
  },
  { name: "About Us", href: "#" },
];

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="absolute top-5  left-[20%] w-[75%] h-[74px] xl:w-[66%] rounded-4xl z-50 text-white bg-black">
      <div className="container flex justify-between items-center px-5 py-2">
        {/* Logo Section */}
        <div className="logo ">
          <CustomButton>
            <a href="#">
              <img
                src={Logo}
                alt="icon"
                className="w-full h-full object-cover object-center filter invert"
              />
            </a>
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Menu */}
        <ul
          ref={menuRef}
          className={`lg:flex gap-5 items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-black rounded-4xl lg:bg-transparent transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex-row flex-col p-5 lg:p-0`}
        >
          {navigation.map((item, index) => (
            <li
              key={item.name}
              className="relative text-[16px]  p-2"
              style={{ fontWeight: "500" }}
            >
              <div
                className="flex items-center min-w-[100px] lg:text-center gap-1 p-2 rounded-2xl justify-between cursor-pointer hover:bg-indigo-400"
                onClick={() =>
                  item.dropList &&
                  setOpenDropdown(openDropdown === index ? null : index)
                }
              >
                <a className="w-full h-full" href={item.href}>
                  {item.name}
                </a>
                {item.dropList && <IoIosArrowDown size={16} />}
              </div>

              {item.dropList && openDropdown === index && (
                <ul className="lg:absolute left-0 py-2 mt-2 w-full lg:w-50 lg:bg-white shadow-lg rounded-lg overflow-hidden lg:block">
                  {item.dropList.map((dropItem) => (
                    <li
                      key={dropItem.name}
                      className="px-4 py-2 w-[100%] lg:w-50 text-white lg:text-black hover:bg-indigo-500 hover:text-white transition-all duration-300"
                    >
                      <a className="block" href={dropItem.href}>
                        {dropItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Buttons inside dropdown in mobile */}
          <div className="lg:hidden flex flex-col gap-2 mt-3">
            <button
              className="text-black  cursor-pointer
          
          px-5 py-2 ml-2 bg-[#DBF880]  rounded-3xl"
            >
              Log in
            </button>
            <button
              className="text-white cursor-pointer
          
          px-5 py-2 bg-indigo-500 rounded-3xl"
            >
              Sign Up
            </button>
          </div>
        </ul>

        {/* Buttons visible in large screens */}
        <div className="hidden lg:flex gap-2">
          <button
            className="text-black  cursor-pointer
          
          px-5 py-2 ml-2 bg-[#DBF880]  rounded-3xl"
          >
            Log in
          </button>
          <button
            className="text-white cursor-pointer
          
          px-5 py-2 bg-indigo-500 rounded-3xl"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
