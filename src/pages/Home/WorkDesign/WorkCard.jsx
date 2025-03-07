import React from "react";
import { FaGift } from "react-icons/fa";

const WorkCard = ({ active, Title, Description }) => {
  const bgColor = active ? "#081C35" : "#fff";
  const textColor = active ? "#FFFFFF96" : "#00000096";
  return (
    <div
      className={` transition duration-300 p-4 rounded-2xl w-[370px] lg:w-[390px] h-[154px] flex flex-col  cursor-pointer shadow-2xl  `}
      style={{
        backgroundColor: bgColor,
        color: active ? "white" : "",
        border: active ? "" : "1px solid #ccc",
      }}
    >
      <h1 className="flex flex-col gap-1 ">
        <span
          className=" p-2  rounded-full w-[32px] h-[32px]"
          style={{
            backgroundColor: active ? "#DBF881" : "#9188F1",
            color: active ? "#081C35" : "#fff",
          }}
        >
          <FaGift />
        </span>
        <span className="text-xl font-bold ">{Title}</span>
      </h1>
      <p
        className="text-[15px]"
        style={{ color: textColor, fontWeight: "500" }}
      >
        {Description}
      </p>
    </div>
  );
};

export default WorkCard;
