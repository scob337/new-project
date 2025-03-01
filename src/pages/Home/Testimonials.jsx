import { FaStar, FaHeart } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="w-[360px] h-[250px] px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-center -mt-16 ">
        <img
          className="object-cover w-20 h-20 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
        />
      </div>
      <div className="flex justify-center text-lg gap-1 py-2 text-[#F17BA7]">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <div className="flex gap-5 flex-col ">
        <h1 className="text-2xl font-bold">
          lorem ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <div>
          <p className="text-gray-500 flex gap-2 items-center">
            Lorem ipsum dolor sit. <FaHeart color="red" />
          </p>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
