import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import Img from "../../../assets/images/giftImg.jfif";

const WorkDesign = () => {
  const Motion = motion;
  return (
    <div className="relative flex flex-col gap-[100px] py-30 max-md:mb-[300px] max-lg:mb-[350px]">
      {/* العنوان والوصف مع تأثير الـ bounce والنزول من فوق */}
      <Motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col h-full md:h-[50%] py-5"
      >
        <h1 className="text-[30px] text-center font-bold font-[coolvetica]">
          Make <span className="text-[#9188F1]">Gifting</span> Simple &
          Meaningful
        </h1>
        <p className="text-gray-500 text-[18px] font-[500] w-[90%] lg:w-[43%] m-auto text-center">
          Add your dream gifts, let friends contribute, and enjoy the perfect
          surprise no more guesswork, just happiness!
        </p>
      </Motion.div>

      {/* الكروت والصورة */}
      <div className="flex justify-center items-center w-[80%] m-auto px-5">
        <div className="relative w-[445px] h-[372px] max-lg:flex max-lg:flex-col max-lg:gap-5">
          {/* صورة الهدية بتظهر مع تأثير الـ bounce */}
          <Motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <img src={Img} alt="Gift" />
          </Motion.div>

          {/* كروت العمل مع تأثير bounce على كل الشاشات */}
          {[
            {
              title: "Get the Gifts You Actually Want",
              desc: "No more unwanted surprises! Simply add your dream gifts, and your friends will know exactly what to get.",
              classes: "lg:absolute lg:top-[-25%] lg:left-[-64%]",
              mobileDir: -120,
              active: true,
            },
            {
              title: "Effortless Group Gifting",
              desc: "Friends and family can contribute together, making it easy to receive bigger, more meaningful gifts.",
              classes: "lg:absolute lg:top-[-25%] lg:right-[-64%]",
              mobileDir: 120,
            },
            {
              title: "Perfect for Any Occasion",
              desc: "Whether it’s a birthday, wedding, baby shower, or holiday, Cadonizer makes gifting stress-free and fun.",
              classes: "lg:absolute lg:bottom-[-5%] lg:right-[-64%]",
              mobileDir: 120,
            },
            {
              title: "No More Awkward Conversations",
              desc: "Forget the hassle of asking for gifts just share your wish list, and let the magic happen!",
              classes: "lg:absolute lg:bottom-[-5%] lg:left-[-64%]",
              mobileDir: -120,
            },
          ].map((card, index) => (
            <Motion.div
              key={index}
              initial={{ x: card.mobileDir + "%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className={`${card.classes} z-50 max-lg:relative max-lg:translate-x-[${card.mobileDir}%]`}
            >
              <WorkCard
                Title={card.title}
                Description={card.desc}
                active={card.active}
              />
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkDesign;
