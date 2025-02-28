import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

const navigation = [
  {
    name: "Blog",
    href: "#",
    dropList: [
      { name: "News", href: "#" },
      { name: "Tech", href: "#" },
      { name: "Business", href: "#" },
      { name: "Entertainment", href: "#" },
    ],
  },
  {
    name: "Tools",
    href: "#",
    dropList: [
      { name: "News", href: "#" },
      { name: "Tech", href: "#" },
      { name: "Business", href: "#" },
      { name: "Entertainment", href: "#" },
    ],
  },
  { name: "About", href: "#" },
];

const Logo =
  "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600";

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
    <nav className="absolute top-0 left-0 w-full z-50 text-white bg-gray-900">
      <div className="container flex justify-between items-center px-5 py-3">
        {/* Logo Section */}
        <div className="logo">
          <a href="#">
            <img
              src={Logo}
              alt="Website Logo"
              className="w-[80px] h-[60px] object-cover object-center"
            />
          </a>
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
          ref={menuRef} // إضافة الـ ref هنا لمراقبة النقرات الخارجية
          className={`lg:flex gap-5 items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex-row flex-col p-5 lg:p-0`}
        >
          {navigation.map((item, index) => (
            <li
              key={item.name}
              className="relative text-[18px] font-semibold p-2"
            >
              <div
                className="flex items-center gap-1 justify-between cursor-pointer hover:text-indigo-400"
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
            <button className="text-white cursor-pointer px-4 py-2 bg-black rounded-xl hover:bg-indigo-400 transition-all duration-300">
              Login
            </button>
            <button className="text-white cursor-pointer px-4 py-2 bg-indigo-500 rounded-xl hover:bg-indigo-400 transition-all duration-300">
              Sign Up
            </button>
          </div>
        </ul>

        {/* Buttons visible in large screens */}
        <div className="hidden lg:flex gap-2">
          <button className="text-white cursor-pointer px-4 py-1 ml-2 bg-black rounded-xl hover:bg-indigo-400 transition-all duration-300">
            Login
          </button>
          <button className="text-white cursor-pointer px-4 py-1 bg-indigo-500 rounded-xl hover:bg-indigo-400 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
