import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className=" px-6 py-5 rounded-lg shadow-md bg-white w-full max-w-xs relative  min-h-[320px]">
      <div className="  z-50 flex justify-center items-start mb-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <div className="m-5">
        <div className="flex justify-center mb-5">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className="inline-block text-sm px-1 text-[#F17BA7]"
            >
              <FaStar />
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold">{testimonial.name}</h3>
        <p className="text-gray-700 mt-3 italic">"{testimonial.message}"</p>
        <span className="text-xs text-gray-400 mt-2 block">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
