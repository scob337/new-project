import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../../assets/images/mobile1.png";
import Image2 from "../../assets/images/mobile2.png";
import BackGround from "../../Components/sharedComponents/BackGround";

const Contribute2 = () => {
  const Motion = motion;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className="lg:min-h-[70vh] min-h-fit grid place-items-center grid-cols-1 lg:grid-cols-2 w-full mb-10 lg:flex lg:flex-row-reverse"
    >
      {/* الجزء الخاص بالنص */}
      <Motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 1.2,
          type: "spring",
          bounce: 0.5,
          damping: 9,
        }}
        className="col-span-2 lg:col-span-1 h-[90%] w-full lg:h-[60%] lg:-ml-[70px] max-lg:p-10 flex flex-col gap-2"
      >
        <div className="flex flex-col gap-2 font-[coolvetica]">
          <h1 className="w-[268px] h-[28px] text-[27px] leading-[28px] text-center font-[400] m-auto">
            Never Miss a{" "}
            <span className="text-[#968AEF] text-3xl lg:text-5xl font-bold">
              Moment
            </span>
          </h1>
        </div>
        <p className="text-[#00000080] w-[346px] h-[100px] text-[18px] leading-[25px] text-center">
          Stay on top of every celebration with smart countdowns, effortless
          planning, and easy RSVP management. Stress-free events start with
          Cadonizer!
        </p>
      </Motion.div>

      {/* الجزء الخاص بالصورة */}
      <div className="col-span-2 lg:col-span-1 flex justify-center items-center h-[100%] relative max-lg:mt-10">
        <div className="relative flex justify-center items-center w-[400px] lg:w-[400px] h-[400px] px-5 overflow-hidden">
          <div className="Background absolute w-full lg:w-[400px] h-full lg:h-[420px] rounded-[30px] overflow-hidden bg-[#9188F1] flex items-center justify-center">
            <Motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 1.2,
                type: "spring",
                bounce: 0.6,
                damping: 8,
              }}
              className="absolute w-[350px] z-40 h-[95%] scale-[1.8] lg:scale-[1.9] top-[105px] left-[40px] p-2"
            >
              <img
                src={Image}
                alt="Mobile UI"
                className="w-full h-full object-cover MobileUI"
              />
            </Motion.div>
          </div>

          <BackGround />
          <Motion.div
            initial={{ scale: 0.5, x: "-100px" }}
            animate={inView ? { scale: 1, x: "0px" } : {}}
            transition={{
              duration: 1.2,
              type: "spring",
              bounce: 0.7,
              damping: 7,
            }}
            className="absolute upper w-[250px] z-50 top-[59%] left-[62%] -translate-x-1/2 -translate-y-1/2 after:absolute after:content-[''] after:w-[10px] after:h-[80px] after:bg-white after:top-[97px] after:left-[19px] after:-rotate-[30deg] after:rounded-lg"
          >
            <img
              src={Image2}
              alt="Mobile UI"
              className="w-full h-full object-center object-cover rounded-5xl"
            />
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contribute2;
