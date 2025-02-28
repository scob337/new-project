import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const navigation = [
  { name: "Home", href: "#" },
  {
    name: "Blog",
    Arrow: <IoIosArrowDown size={16} />,
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

  return (
    <nav className=" absolute top-0 left-0 w-full z-50 text-white  ">
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

        {/* Navigation Menu */}
        <ul className="flex gap-5 items-center">
          {navigation.map((item, index) => (
            <li
              key={item.name}
              className="relative text-[18px] font-semibold p-2 hover:bg-indigo-500 transition-all duration-300 rounded-lg cursor-pointer hover:text-white"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                className="flex items-center gap-1 justify-center"
                href={item.href}
              >
                {item.name} {item.Arrow}
              </a>

              {item.dropList && openDropdown === index && (
                <ul className="absolute left-0 py-2 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
                  {item.dropList.map((dropItem) => (
                    <li
                      key={dropItem.name}
                      className="px-4 py-2 text-black hover:bg-indigo-500 hover:text-white transition-all duration-300"
                    >
                      <a href={dropItem.href}>{dropItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
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
