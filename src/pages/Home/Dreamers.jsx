import { FaGift } from "react-icons/fa";

const iconList = [
  {
    icon: FaGift, // تمرير المكون بدلاً من الـ JSX
    title: "Smart Gift Lists",
    description: "Easily create and manage wish lists for any occasion.",
  },
  {
    icon: FaGift,
    title: "Gift Reminders",
    description: "Never forget a special occasion with timely notifications.",
  },
  {
    icon: FaGift,
    title: "Event Planning",
    description: "  Organize birthdays, weddings, and holidays effortlessly.  ",
  },
  {
    icon: FaGift,
    title: "Share with Friends",
    description: "   Send your wish list to family and friends in one click. ",
  },
  {
    icon: FaGift,
    title: "Multi-Device Access",
    description: "  Sync your wish list across all your devices seamlessly.  ",
  },
  {
    icon: FaGift,
    title: "Private & Secure",
    description: "  Keep your wish lists private or share them selectively.  ",
  },
  {
    icon: FaGift,
    title: "Gift Suggestions",
    description: "  AI-powered recommendations based on your interests.  ",
  },
  {
    icon: FaGift,
    title: "Shop with Ease",
    description: "  Get direct links to buy gifts from your favorite stores.  ",
  },
];

const Dreamers = () => {
  return (
    <div className="flex flex-col justify-center items-center py-0 w-full">
      <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-center">
        What <span className="text-[#968AEF]">dreamers</span> think of us
      </h1>
      <p className="text-gray-400 text-xl w-[90%] lg:w-[33%] text-center mb-7">
        Because every celebration tells a story let Cadonizer help you write
        yours.
      </p>
      <div className="flex flex-wrap justify-center gap-6 w-[100%] ">
        {iconList.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <div
              key={index}
              className="group bg-white hover:bg-[#9188F1] cursor-pointer shadow-lg lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 h-[200px] flex flex-col justify-center items-center gap-1 p-3 rounded-lg border border-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <span className="relative flex items-center justify-center w-20 h-20 rounded-full group-hover:bg-[#A29BF3]  bg-gray-800 shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.25),inset_2px_-2px_4px_rgba(255,255,255,0.25)]">
                <span className="flex items-center justify-center w-15 h-15 rounded-full group-hover:bg-[#B4AEF5]  bg-gray-700 shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.25),inset_2px_-2px_4px_rgba(255,255,255,0.25)]">
                  <IconComponent className="text-[#fff] text-[36px] transition-colors duration-300 group-hover:text-[#DBF880]" />
                </span>
              </span>

              <h3 className="text-lg font-semibold group-hover:text-gray-200">
                {item.title}
              </h3>
              <p className="text-[14px] text-gray-500 group-hover:text-gray-200 text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dreamers;
