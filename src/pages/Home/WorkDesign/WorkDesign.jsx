import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import Img from "../../../assets/images/giftImg.jfif";

const WorkDesign = () => {
  const Motion = motion;
  return (
    <div className="relative flex flex-col gap-[100px]">
      {/* العنوان والوصف */}
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

      {/* الصورة والكروت */}
      <div className="flex justify-center items-center w-[80%] m-auto px-5">
        <div className="relative w-[445px] h-auto flex flex-col items-center lg:block">
          {/* كروت العمل (للشاشات الصغيرة تكون فوق الصورة) */}
          <div className="flex flex-col gap-5 mb-5 lg:hidden">
            {[
              {
                title: "Get the Gifts You Actually Want",
                desc: "No more unwanted surprises! Simply add your dream gifts, and your friends will know exactly what to get.",
              },
              {
                title: "Effortless Group Gifting",
                desc: "Friends and family can contribute together, making it easy to receive bigger, more meaningful gifts.",
              },
            ].map((card, index) => (
              <Motion.div
                key={index}
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <WorkCard
                  Title={card.title}
                  Description={card.desc}
                  active={index === 0}
                />
              </Motion.div>
            ))}
          </div>

          {/* صورة الهدية */}
          <Motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <img
              src={Img}
              alt="Gift illustration"
              className="mx-auto"
              loading="lazy"
            />
          </Motion.div>

          {/* كروت العمل (للشاشات الصغيرة تكون تحت الصورة) */}
          <div className="flex flex-col gap-5 mt-5 lg:hidden">
            {[
              {
                title: "Perfect for Any Occasion",
                desc: "Whether it’s a birthday, wedding, baby shower, or holiday, Cadonizer makes gifting stress-free and fun.",
              },
              {
                title: "No More Awkward Conversations",
                desc: "Forget the hassle of asking for gifts just share your wish list, and let the magic happen!",
              },
            ].map((card, index) => (
              <Motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <WorkCard Title={card.title} Description={card.desc} />
              </Motion.div>
            ))}
          </div>

          {/* التصميم العادي للكروت في الشاشات الكبيرة */}
          <div className="hidden lg:block">
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
                className={`${card.classes} z-50`}
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
    </div>
  );
};

export default WorkDesign;
