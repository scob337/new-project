import MainTitle from "../../../Components/sharedComponents/MainTitle";
import WorkCard from "./WorkCard";

const WorkDesign = () => {
  return (
    <div className="min-h-[70vh] my-10  ">
      <MainTitle ColorTitle="epically" Title="Designed To Work" />

      <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 w-[80%] m-auto">
        <div className="p-3 flex flex-col gap-5 col-span-1">
          <WorkCard active={true} />
          <WorkCard />
        </div>
        <div className="p-3 flex flex-col gap-5 col-span-1">
          <img
            src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WorkDesign;
