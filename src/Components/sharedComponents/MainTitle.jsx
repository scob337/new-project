const MainTitle = ({ ColorTitle, Title, Style }) => {
  return (
    <div className="flex flex-col   py-5 ">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">{Title}</h1>
        <h1 className="text-[#968AEF] text-4xl font-bold" style={Style}>
          {ColorTitle}
        </h1>
      </div>
    </div>
  );
};

export default MainTitle;
