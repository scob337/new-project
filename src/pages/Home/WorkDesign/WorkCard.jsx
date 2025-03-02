import React from "react";
import { FaKickstarterK } from "react-icons/fa";

const WorkCard = ({ active }) => {
  const bgColor = active ? "#3A3F45" : "";
  return (
    <div
      className={`hover:bg-[#3A3F45] transition duration-300 p-4 rounded-lg w-[400px] hover:text-white flex flex-col gap-3 cursor-pointer shadow-2xl`}
      style={{ backgroundColor: bgColor, color: active ? "white" : "" }}
    >
      <h1 className="flex gap-1  items-center">
        <span className="text-[#F4AFCA] bg-black p-2 rounded-full">
          <FaKickstarterK />
        </span>{" "}
        <span className="text-2xl font-bold">Work Design Page</span>
      </h1>
      <p>
        Design is the art of creating something that is aesthetically pleasing
        and functional.
      </p>
    </div>
  );
};

export default WorkCard;
