const BackGround = () => {
  return (
    <div className="absolute w-[300px] lg:w-[400px] h-[380px] lg:h-[420px] rounded-[30px] overflow-hidden bg-[#9188F1] flex items-center justify-center">
      <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full top-[-50px] left-[-40px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>
      <div className="absolute w-[320px] h-[320px] bg-white opacity-10 rounded-full bottom-[10px] right-[-10px] shadow-[inset 0px 4px 8px rgba(255,255,255,0.25), inset 0px -4px 8px rgba(255,255,255,0.25)]"></div>
    </div>
  );
};

export default BackGround;
