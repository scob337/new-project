import { FaGift } from "react-icons/fa";

const iconList = [
  {
    icon: FaGift, // تمرير المكون بدلاً من الـ JSX
    title: "Event",
    description: "Lorem ipsum dolor sit.",
  },
  {
    icon: FaGift,
    title: "Party",
    description: "Lorem ipsum dolor sit.",
  },
  {
    icon: FaGift,
    title: "Festival",
    description: "Lorem ipsum dolor sit.",
  },
  {
    icon: FaGift,
    title: "Celebration",
    description: "Lorem ipsum dolor sit.",
  },
  {
    icon: FaGift,
    title: "Anniversary",
    description: "Lorem ipsum dolor sit.",
  },
  {
    icon: FaGift,
    title: "Special Day",
    description: "Lorem ipsum dolor sit.",
  },
];

const Dreamers = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 w-full">
      <h1 className="text-3xl font-bold leading-tight mb-6 text-center">
        What <span className="text-[#968AEF]">dreamers</span> think of us
      </h1>

      <div className="flex flex-wrap justify-center gap-6 w-[100%] ">
        {iconList.map((item, index) => {
          const IconComponent = item.icon; // استدعاء الأيقونة كمكون

          return (
            <div
              key={index}
              className="bg-white cursor-pointer shadow-lg w-[180px] h-[170px] flex flex-col justify-center items-center gap-2 p-2 rounded-lg border border-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <span className="bg-[#F1E4FB] w-[80px] h-[80px] flex justify-center items-center rounded-full p-2">
                <IconComponent className="text-[#74489E] text-[40px]" />
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500 text-center">
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
