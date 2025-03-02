import React from "react";
import BlogCard from "./BlogCard";
import MainTitle from "../../../Components/sharedComponents/MainTitle";

const BlogFeed = () => {
  return (
    <div className="my-10">
      <MainTitle
        Title="Blog Feed"
        ColorTitle="Latest News and Updates"
        Style={{ textShadow: "1px 1px 3px red" }}
      />
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 ">
        <BlogCard Count="0" Writer="Mohamed Ahmed" />
        <BlogCard Count="2" Writer="Abdeltawab Shaaban" />
      </div>
      <div className="flex  gap-2 justify-evenly items-center mt-10 bg-[#F4F3F0] py-5 flex-wrap">
        <h1 className="text-4xl font-bold text-[#968AEF] ">
          {" "}
          Never Miss a Post !
        </h1>
        <div className="flex  gap-2 bg-white items-center p-1 rounded-3xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none border-none bg-transparent py-2 px-4 rounded-full w-full"
          />
          <button className="bg-[#FC8652] cursor-pointer text-white font-bold py-2 px-4 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogFeed;
