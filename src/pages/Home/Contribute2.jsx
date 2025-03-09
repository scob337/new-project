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
      className="lg:min-h-[70vh] min-h-fit grid place-items-center grid-cols-1 lg:grid-cols-2 w-full lg:mb-10 lg:flex lg:flex-row-reverse lg:gap-20"
    >
      <Motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 1.2,
          type: "spring",
          bounce: 0.5,
          damping: 9,
        }}
        className="col-span-2 lg:col-span-1 m-auto lg:w-[523px] lg:h-[60%] 
    lg:-ml-[70px] max-lg:p-10 flex flex-col lg:items-start items-center gap-2"
      >
        <h1 className="lg:w-[400px] text-[27px] lg:leading-[48px] lg:text-[50px] font-[500] font-[coolvetica] text-center lg:text-start
        
        max-md:w-[268px] max-md:h-[28px] max-md:mb-2 max-md:leading-[28px]
        ">
          Never Miss A 
          <span className="text-[#968AEF] font-bold"> Moment</span>
        </h1>
        <p
          className="text-[#00000080] lg:w-[515px] lg:text-start lg:text-[25px] lg:leading-[37px] font-[500]
        w-[346px] h-[100px] text-[18px] leading-[25px] text-center
        "
        >
          Stay on top of every celebration with smart countdowns, effortless
          planning, and easy RSVP management. Stress-free events start with
          Cadonizer!
        </p>
      </Motion.div>

      <div className="col-span-2 lg:col-span-1 flex justify-center items-center h-[100%] lg:w-[548px] relative ">
        <div className="relative flex justify-center items-center w-[400px] lg:w-[548px] h-[571px] px-5 overflow-hidden">
          <div
            className="Background absolute  w-[376px] lg:w-[400px] h-[391.781005859375px] lg:h-[420px]
           rounded-[30px] overflow-hidden bg-[#9188F1] flex items-center justify-center "
          >
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
            className="absolute upper w-[212px] lg:w-[250px] 
            z-50 top-[59%] left-[61%] lg:top-[56.5%] lg:left-[59%] 
            -translate-x-1/2 
            -translate-y-1/2 after:absolute
             after:content-[''] after:w-[10px] after:h-[80px] 
            after:bg-white after:top-[80px] after:lg:top-[98px] after:lg:left-[20px] after:left-[22px] after:-rotate-[30deg] after:rounded-lg"
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
