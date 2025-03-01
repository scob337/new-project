import CardWithImg from "../../Components/sharedComponents/CardWithImg";
import CardWithText from "../../Components/sharedComponents/CardWithText";
import MobileMockup from "../../Components/sharedComponents/MobileMockup";

const Wish = () => {
  const Para =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.";

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 min-h-screen gap-4 p-4 max-lg:mb-[200px]">
      {/* Left Section */}
      <div className="flex justify-center items-center py-5 w-full lg:col-span-1">
        <div className="relative w-full p-5 text-center md:text-left">
          <h1 className="text-3xl font-bold leading-tight">Any Wish?</h1>
          <h1 className="text-3xl font-bold leading-tight text-[#968AEF]">
            Oh, yeah
          </h1>
          <p className="text-lg text-gray-500 mt-4 w-full">{Para}</p>
          <h3 className="text-lg font-semibold text-gray-500 mt-5 w-full">
            Wishew makes every wish matter
          </h3>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-col gap-10 justify-center items-center py-5 w-full h-full lg:col-span-2">
        <MobileMockup>
          <p>Hello</p>
        </MobileMockup>

        {/* Positioning Cards */}
        <div className="lg:absolute lg:top-[30%] max-lg:mb-[50px] lg:left-8 rotate-[-3deg] transform -translate-x-1/2 w-20 h-4 z-50 md:w-24 md:h-5">
          <CardWithImg />
        </div>
        <div className="lg:absolute lg:top-[35%] max-lg:mt-[150px] lg:left-[30%] rotate-[-3deg] transform -translate-x-1/2 w-20 h-4 z-50 md:w-24 md:h-5">
          <CardWithText
            BG={"#CCC6D9"}
            TextColor={"black"}
            ButtonBG={"#fff"}
            ButtonColor={"#000"}
            PriceColor={"white"}
            HeaderColor={"white"}
          />
        </div>
        <div className="lg:absolute lg:top-[37%] max-lg:mt-[150px] lg:left-[77%] rotate-[-5deg] transform -translate-x-1/2 w-20 h-4 z-50 md:w-24 md:h-5  md:block">
          <CardWithText
            BG={"white"}
            TextColor={"black"}
            ButtonBG={"#EB5C95"}
            ButtonColor={"#fff"}
            PriceColor={"#EB5C95"}
            HeaderColor={"#EB5C95"}
          />
        </div>
        <div className="lg:absolute lg:top-[35%] max-lg:mt-[150px] lg:left-[55%] rotate-[5deg] transform -translate-x-1/2 w-20 h-4 z-50 md:w-24 md:h-5">
          <CardWithText
            BG={"#EB5C95"}
            TextColor={"white"}
            ButtonBG={"#fff"}
            ButtonColor={"#000"}
            PriceColor={"white"}
            HeaderColor={"white"}
          />
        </div>

        <div className="lg:absolute lg:top-[15%] max-lg:mt-[150px] lg:right-11 rotate-[7deg] transform -translate-x-1/2 w-20 h-4 z-50 md:w-24 md:h-5  md:block">
          <CardWithImg />
        </div>
      </div>
    </div>
  );
};

export default Wish;
