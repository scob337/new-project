import { motion } from "framer-motion";
import testimonialsData from "./Data";
import TestimonialCard from "./TestimonialsCard";
import TestimonialsHeader from "./TestimonialsHeader";

const Testimonials = () => {
  const Motion = motion;
  return (
    <div className="min-h-[70vh] overflow-visible bg-[#9188F1] px-5 py-10 flex flex-col gap-20 relative">
      <Motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TestimonialsHeader />
      </Motion.div>

      {/* Decorative Circles */}
      <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full top-[-50px] left-[300px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>
      <div className="absolute w-[500px] h-[500px] bg-white opacity-10 rounded-full bottom-[10px] right-[500px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>
      <div className="absolute w-[1000px] h-[1000px] bg-white opacity-10 rounded-full top-[-200px] right-[-500px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>

      <Motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex gap-3 justify-center items-center flex-wrap"
      >
        {testimonialsData.map(({ name, role, message, IMG }, index) => (
          <div
            key={index}
            className="flex justify-center items-center mb-10 overflow-visible z-50"
            role="article"
            aria-label={`Testimonial by ${name}`}
          >
            <TestimonialCard
              name={name}
              role={role}
              message={message}
              IMG={IMG}
            />
          </div>
        ))}
      </Motion.div>
    </div>
  );
};

export default Testimonials;
