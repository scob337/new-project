import AddFrind from "../../assets/images/EventIcon/addFriend.png";
import AI from "../../assets/images/EventIcon/ai.png";
import Calendar from "../../assets/images/EventIcon/calendar.png";
import Gift from "../../assets/images/EventIcon/gift.png";
import Hand from "../../assets/images/EventIcon/hand.png";
import Love from "../../assets/images/EventIcon/Love.png";
import Profit from "../../assets/images/EventIcon/profit.png";
import QR from "../../assets/images/EventIcon/qr.png";
const iconList = [
  {
    IMG: Calendar,
    title: "Seamless Event Planning",
    description:
      " Plan birthdays, weddings, and special occasions effortlessly in one place.",
  },
  {
    IMG: AddFrind,
    title: " Smart Guest List & RSVPs",
    description:
      "Send invites, track responses, and get insights in real-time.",
  },
  {
    IMG: Gift,
    title: "Wish Lists Made Simple",
    description: "Create, share wish lists, and get AI gift suggestions. ",
  },
  {
    IMG: Love,
    title: "Personalized Digital Invitations",
    description: " Design stunning animated e-cards for your guests. ",
  },
  {
    IMG: Profit,
    title: "Stay on Budget, Stay in Control",
    description: " Track expenses and manage to-do lists with ease.",
  },
  {
    IMG: QR,
    title: "Instant QR Photo Share",
    description: "Guests upload & share event photos—no app needed.",
  },

  {
    IMG: Hand,
    title: "Find the Best Vendors",
    description: " Discover top-rated services and book instantly.",
  },
  {
    IMG: AI,
    title: "AI Event Assistant (Cadobot)",
    description: "Get smart suggestions for planning and gift ideas.",
  },
];

const Dreamers = () => {
  return (
    <div className="flex flex-col justify-center items-center py-0 w-full">
      <h1 className="w-[268px] h-[56px] text-[27px] leading-[28px] lg:text-[50px] lg:leading-[48px] lg:w-[576px] lg:h-[96px]  font-[coolvetica] font-bold mb-2 text-center">
        Effortless Celebrations with{" "}
        <span className="text-[#968AEF]"> Cadonizer </span>
      </h1>
      <p className="text-gray-400 w-[330px] h-[50px] text-[18px] leading-[25px] lg:text-[25px] lg:w-[596px] lg:h-[60px] text-center mb-7">
        Your all-in-one event planner—seamless from organizing to gifting
      </p>
      <div className="flex flex-wrap justify-center gap-6 w-[100%] ">
        {iconList.map((item, index) => {
          return (
            <div
              key={index}
              className="group bg-white hover:bg-[#9188F1] cursor-pointer shadow-md w-[286] h-[171.6px]  lg:w-[265px] lg:h-[159px] flex flex-col justify-center items-center gap-1 p-3 rounded-lg border border-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <span className="relative flex items-center justify-center w-[48px] h-[48px] rounded-full group-hover:bg-[#A29BF3]  bg-gray-800 shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.25),inset_2px_-2px_4px_rgba(255,255,255,0.25)]">
                <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full group-hover:bg-[#B4AEF5]  bg-gray-700 shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.25),inset_2px_-2px_4px_rgba(255,255,255,0.25)]">
                  <img
                    src={item.IMG}
                    alt=""
                    className="text-[#fff] w-[22px] h-[22px] transition-colors duration-300 group-hover:text-[#DBF880]"
                  />
                </span>
              </span>

              <h3 className="text-[14px] font-semibold group-hover:text-gray-200">
                {item.title}
              </h3>
              <p className="text-[12px] text-gray-500 group-hover:text-gray-200 text-center">
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
