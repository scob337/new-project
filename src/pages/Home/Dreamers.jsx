import AddFrindW from "../../assets/images/EventIcon/addFriend-w.png";
import AIW from "../../assets/images/EventIcon/ai-w.png";
import CalendarW from "../../assets/images/EventIcon/calendar-w.png";
import GiftW from "../../assets/images/EventIcon/gift-w.png";
import HandW from "../../assets/images/EventIcon/hand-w.png";
import LoveW from "../../assets/images/EventIcon/Love-w.png";
import ProfitW from "../../assets/images/EventIcon/profit-w.png";
import QRW from "../../assets/images/EventIcon/qr-w.png";
import AddFrindY from "../../assets/images/EventIcon/addFriend-y.png";
import AIY from "../../assets/images/EventIcon/ai-y.png";
import CalendarY from "../../assets/images/EventIcon/calendar-y.png";
import GiftY from "../../assets/images/EventIcon/gift-y.png";
import HandY from "../../assets/images/EventIcon/hand-y.png";
import LoveY from "../../assets/images/EventIcon/Love-y.png";
import ProfitY from "../../assets/images/EventIcon/profit-y.png";
import QRY from "../../assets/images/EventIcon/qr-y.png";
const iconList = [
  {
    IMG_W: CalendarW,
    IMG_Y: CalendarY,
    title: "Seamless Event Planning",
    description: "Plan birthdays, weddings, and special occasions effortlessly in one place.",
  },
  {
    IMG_W: AddFrindW,
    IMG_Y: AddFrindY,
    title: "Smart Guest List & RSVPs",
    description: "Send invites, track responses, and get insights in real-time.",
  },
  {
    IMG_W: GiftW,
    IMG_Y: GiftY,
    title: "Wish Lists Made Simple",
    description: "Create, share wish lists, and get AI gift suggestions.",
  },
  {
    IMG_W: LoveW,
    IMG_Y: LoveY,
    title: "Personalized Digital Invitations",
    description: "Design stunning animated e-cards for your guests.",
  },
  {
    IMG_W: ProfitW,
    IMG_Y: ProfitY,
    title: "Stay on Budget, Stay in Control",
    description: "Track expenses and manage to-do lists with ease.",
  },
  {
    IMG_W: QRW,
    IMG_Y: QRY,
    title: "Instant QR Photo Share",
    description: "Guests upload & share event photos—no app needed.",
  },
  {
    IMG_W: HandW,
    IMG_Y: HandY,
    title: "Find the Best Vendors",
    description: "Discover top-rated services and book instantly.",
  },
  {
    IMG_W: AIW,
    IMG_Y: AIY,
    title: "AI Event Assistant (Cadobot)",
    description: "Get smart suggestions for planning and gift ideas.",
  },
];

const Dreamers = () => {
  return (
    <div className="flex flex-col justify-center items-center py-0 w-full">
      <h1 className="w-[268px] h-[56px] text-[27px] leading-[28px] lg:text-[50px] lg:leading-[48px] lg:w-[576px] lg:h-[96px] font-[coolvetica] font-bold mb-2 text-center">
        Effortless Celebrations with{" "}
        <span className="text-[#968AEF]"> Cadonizer </span>
      </h1>
      <p className="text-gray-400 w-[330px] h-[50px] text-[18px] leading-[25px] lg:text-[25px] lg:w-[596px] lg:h-[60px] text-center mb-7">
        Your all-in-one event planner—seamless from organizing to gifting
      </p>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {iconList.map((item, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-[#9188F1] cursor-pointer shadow-md 
              w-[286px] h-[171.6px] lg:w-[265px] lg:h-[159px] flex flex-col justify-center 
              items-center gap-1 p-3 rounded-lg border border-gray-200 transition-transform duration-300"
          >
            <span className="relative flex items-center justify-center w-[48px] h-[48px] rounded-full group-hover:bg-[#A29BF3] bg-gray-800 shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.25),inset_2px_-2px_4px_rgba(255,255,255,0.25)]">
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full group-hover:bg-[#B4AEF5] bg-gray-700 shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.25),inset_2px_-2px_4px_rgba(255,255,255,0.25)]">
                
                <img
                  src={item.IMG_W}
                  alt=""
                  className="w-[22px] h-[22px] absolute group-hover:hidden"
                />

                <img
                  src={item.IMG_Y}
                  alt=""
                  className="w-[22px] h-[22px] hidden group-hover:block"
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
        ))}
      </div>
    </div>
  );
};

export default Dreamers;
