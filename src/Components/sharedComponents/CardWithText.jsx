const CardWithText = ({
  BG,
  TextColor,
  ButtonBG,
  PriceColor,
  HeaderColor,
  ButtonColor,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 w-[180px] h-[200px] rounded-4xl p-4`}
      style={{ backgroundColor: BG }}
    >
      <div className=" rounded-4xl w-full px-2 " style={{ color: HeaderColor }}>
        {" "}
        Hello World{" "}
      </div>
      <div className="  rounded-4xl w-full px-2">
        <h1 className="text-lg font-bold" style={{ color: TextColor }}>
          Hello World Hello Hello{" "}
        </h1>
      </div>
      <div
        className="  rounded-4xl w-full px-2 text-lg"
        style={{ color: PriceColor }}
      >
        {" "}
        $2000
      </div>

      <div className="  rounded-4xl w-full px-2">
        <button
          className="w-full px-2 py-1 rounded-4xl cursor-pointer"
          style={{ backgroundColor: ButtonBG , color: ButtonColor}}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default CardWithText;
