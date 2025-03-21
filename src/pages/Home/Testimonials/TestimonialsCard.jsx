import React from "react";
import Qoute from "../../../assets/images/qoute.png";
import Logo from "../../../assets/images/Logo.png";

const TestimonialCard = (props) => {
  const { name, role, message, IMG } = props;

  const formattedMessage = message.replace(
    /Cadonizer/g,
    '<strong class="font-bold text-black">Cadonizer</strong>'
  );

  return (
    <div className=" w-[300px] lg:w-[360px]  h-[360px] flex flex-col justify-between bg-white shadow-lg rounded-2xl p-2 border border-gray-200">
      {/* Logo & Quote */}
      <div className="flex justify-between items-start">
        <img
          src={Logo}
          alt="Logo"
          className=" filter grayscale-[80%]
          w-[255px] 
          "
        />

        <span className="w-15 h-15 text-[#00000033] font-bold">
          <img src={Qoute} alt="" />
        </span>
      </div>

      {/* Message */}
      <p
        className="text-gray-600 italic my-3"
        dangerouslySetInnerHTML={{ __html: formattedMessage }}
      />

      {/* Rating */}
      <div className="flex justify-center gap-1 text-yellow-500 text-xl my-3">
        {"★".repeat(5)}
      </div>

      <div className="flex items-center w-full justify-center px-4 py-2 rounded-lg">
        <img
          src={IMG}
          alt={name}
          className="w-15 h-15 object-cover object-center rounded-full mr-3 "
        />
        <div className="bg-[#DBF880] w-[300px] h-[60px] rounded-4xl flex flex-col items-start justify-center pl-3">
          <p className="text-xs text-gray-600">{role}</p>
          <p className="text-black font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
