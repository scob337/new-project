import { BsFillSendFill } from "react-icons/bs";

export default function CardWithImg({
  title,
  image,
  bgColor = "#C9DFDD",
  Color,
}) {
  return (
    <div className="relative
     w-[180px] md:w-[220px] lg:w-[304px] h-[160px] md:h-[200px] lg:h-[274px] flex flex-col gap-2">
      <img
        src={image}
        alt="Image"
        className="w-[160px] md:w-[200px] lg:w-[287.55px] h-[100px] md:h-[120px] lg:h-[168px] object-cover rounded-[15px] shadow-lg"
      />

      <div className="flex items-center w-[180px] md:w-[220px] lg:w-[293px] h-[40px] md:h-[50px] lg:h-[60px] gap-3 md:gap-4 lg:gap-5">
        <div
          style={{ backgroundColor: bgColor, color: Color }}
          className="w-[35px] md:w-[45px] lg:w-[60px] h-[35px] md:h-[45px] lg:h-[60px] rounded-full flex justify-center items-center z-10"
        >
          <BsFillSendFill className="rotate-[270deg] w-[14px] md:w-[16px] lg:w-[22px] h-[14px] md:h-[16px] lg:h-[22px]" />
        </div>

        <div
          style={{ backgroundColor: bgColor, color: Color }}
          className="text-black text-[12px] md:text-[14px] lg:text-[14px] w-[130px] md:w-[170px] lg:w-[227px] h-[40px] md:h-[50px] lg:h-[60px] flex items-center px-2 md:px-3 lg:px-6 rounded-[30px] shadow-md transform"
        >
          <p className="w-full h-[20px] md:h-[25px] lg:h-[31px] text-[14px] md:text-[16px] lg:text-[20px] text-center font-[600] whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
