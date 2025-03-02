import { BsHearts } from "react-icons/bs";

const TestimonialsHeader = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-white text-center">
        Testimonials
      </h1>
      <p className="text-[#DAF683] font-bold text-2xl lg:text-4xl flex justify-center text-center items-center gap-1">
        Why They love Cadonizer
        <BsHearts color="red" size={26} className="mb-3" />
      </p>
    </div>
  );
};

export default TestimonialsHeader;
