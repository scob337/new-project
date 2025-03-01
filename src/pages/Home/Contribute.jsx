import MobileMockup from "../../Components/sharedComponents/MobileMockup";

const Contribute = () => {
  return (
    <div className="min-h-screen my-10 grid place-items-center grid-cols-1 lg:grid-cols-2 w-full p-5  ">
      <div className="col-span-1 h-full">
        <MobileMockup></MobileMockup>
      </div>
      <div className="col-span-1 h-[70%] flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Why Contribute?</h1>
          <h1 className="text-[#968AEF] text-5xl font-bold">
            It's Stunning deal
          </h1>
        </div>
        <p className="text-gray-500 w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quae.
        </p>
        <p className="font-bold text-gray-500 w-[80%]">Pretty cool, right?</p>
      </div>
    </div>
  );
};

export default Contribute;
