import React from "react";
import BlogCard from "./BlogCard";
import MainTitle from "../../../Components/sharedComponents/MainTitle";

const BlogFeed = () => {
  return (
    <div className="my-10 flex flex-col gap-5">
      <div>
        <h1 className="lg:text-5xl text-2xl  text-center py-2 font-[coolvetica]">
          Checkout Our Last <span className="text-[#9188F1]"> News</span>
        </h1>
        <p className="text-gray-500 text-center w-[80%] text-[20px] lg:text-[25px] lg:w-[40%] m-auto">
          Stay informed with the newest features, trends, and gift ideas.
        </p>
      </div>
      <div className="grid place-items-center  grid-cols-1 lg:grid-cols-2 w-[80%] m-auto">
        <BlogCard Writer="Mohamed Ahmed" />
        <BlogCard Writer="Abdeltawab Shaaban" />
      </div>
    </div>
  );
};

export default BlogFeed;
