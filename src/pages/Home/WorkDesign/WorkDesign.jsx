import WorkCard from "./WorkCard";
import Img from "../../../assets/images/giftImg.jfif";

const WorkDesign = () => {
  return (
    <div className="relative flex flex-col gap-[100px] py-30 max-md:mb-[300px] max-lg:mb-[350px]" >
      <div className="flex flex-col h-full md:h-[50%] py-5">
        <h1 className="text-[30px] text-center font-bold font-[coolvetica]">
          Make <span className="text-[#9188F1]">Gifting</span> Simple &
          Meaningful
        </h1>
        <p className="text-gray-500 text-[18px] font-[500] w-[90%] lg:w-[43%] m-auto text-center">
          Add your dream gifts, let friends contribute, and enjoy the perfect
          surprise no more guesswork, just happiness!
        </p>
      </div>

      <div className="flex justify-center items-center w-[80%] m-auto  px-5">
        <div className="relative w-[445px] h-[372px] max-lg:flex max-lg:flex-col max-lg:gap-5">
          <div className="lg:absolute lg:top-[-25%] lg:left-[-64%]">
            <WorkCard
              active={true}
              Title="Get the Gifts You Actually Want"
              Description="No more unwanted surprises! Simply add your dream gifts, and your friends will know exactly what to get."
            />
          </div>
          <div className="lg:absolute lg:top-[-25%] lg:right-[-64%]">
            <WorkCard
              Title="Effortless Group Gifting"
              Description="Friends and family can contribute together, making it easy to receive bigger, more meaningful gifts."
            />
          </div>
          <div className="lg:absolute lg:bottom-[-5%] lg:right-[-64%]">
            <WorkCard
              Title="Perfect for Any Occasion"
              Description="Whether it’s a birthday, wedding, baby shower, or holiday, Cadonizer makes gifting stress-free and fun."
            />
          </div>
          <div className="lg:absolute lg:bottom-[-5%] lg:left-[-64%]">
            <WorkCard
              Title="No More Awkward Conversations"
              Description="Forget the hassle of asking for gifts just share your wish list, and let the magic happen!"
            />
          </div>
          <div>
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDesign;
