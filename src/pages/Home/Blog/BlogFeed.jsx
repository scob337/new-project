import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogCard from "./BlogCard";
import Blogs from "../../../assets/images/blogs.jfif";
import Blogs1 from "../../../assets/images/blogss.jfif";

const BlogFeed = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="my-10 flex flex-col gap-5">
      {/* العنوان والنصوص مع تأثير bounce */}
      <motion.div
        ref={titleRef}
        initial={{ y: -100, opacity: 0 }}
        animate={titleInView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <h1 className="lg:text-5xl text-xl text-center font-semibold py-2 font-[coolvetica]">
          Stay Ahead in <span className="text-[#9188F1]"> Event</span> Planning
        </h1>
        <p className="text-gray-500 text-center w-[80%] text-[18px] lg:text-[25px] lg:w-[50%] m-auto">
          Get expert tips, trends, and new Cadonizer features for unforgettable
          celebrations!
        </p>
      </motion.div>

      {/* Blog Cards مع تأثير scale بدون تأخير */}
      <div
        ref={cardsRef}
        className="grid place-items-center grid-cols-1 lg:grid-cols-2 w-[70%] m-auto"
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={cardsInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
        >
          <BlogCard
            Writer="Mohamed Ahmed"
            Title="The Stress-Free Gifting"
            Src={Blogs}
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={cardsInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
        >
          <BlogCard
            Writer="Abdeltawab Shaaban"
            Title="Top 5 Occasions to Use"
            Src={Blogs1}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogFeed;
