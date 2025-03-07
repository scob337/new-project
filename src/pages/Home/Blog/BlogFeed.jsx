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

    </div>
  );
};

export default BlogFeed;
