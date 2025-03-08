import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import BlogImg1 from "../../assets/images/Blog1.jfif";
import BlogImg2 from "../../assets/images/Blog2.jfif";
import BlogImg3 from "../../assets/images/Blog3.jfif";

const blogPosts = [
  {
    id: 1,
    image: BlogImg1,
    date: "March 18, 2024",
    readTime: "9 min read",
    title: "The Ultimate Guide to Stress-Free Gifting",
    description:
      "Ever struggled to find the perfect gift? Learn how our app makes gifting easy, thoughtful, and fun for every occasion!",
    link: "#",
  },
  {
    id: 2,
    image: BlogImg2,
    date: "March 18, 2024",
    readTime: "6 min read",
    title: "How Group Gifting Makes Dreams Come True",
    description:
      "Ever struggled to find the perfect gift? Learn how our app makes gifting easy, thoughtful, and fun for every occasion!",
    link: "#",
  },
  {
    id: 3,
    image: BlogImg3,
    date: "March 16, 2024",
    readTime: "7 min read",
    title: "Top 5 Occasions to Use Our App",
    description:
      "Ever struggled to find the perfect gift? Learn how our app makes gifting easy, thoughtful, and fun for every occasion!",
    link: "#",
  },
];

const BlogSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.2, // Increased threshold for better trigger timing
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(2.5);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(blogPosts.length - cardsPerView);

  const nextSlide = () => {
    if (activeIndex < maxIndex) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div ref={ref} className="max-w-6xl mx-auto py-10 px-5 overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-between items-start"
      >
        <div className="px-2">
          <h1 className="lg:text-3xl text-xl font-bold">
            Check Our <span className="text-[#9188F1]">Blogs</span>
          </h1>
          <p className="text-gray-500 lg:text-[18px] mb-8 lg:w-[60%]">
            Smart Gifting Ideas For Every Occasion!
          </p>
        </div>
        <button className="lg:w-[170px] lg:h-[52px] w-[150px] h-[40px] text-[14px] rounded-[26px] bg-[#9188F1] text-white lg:text-[16px] font-medium shadow-lg hover:bg-[#7a75d9] transition duration-300">
          Learn more
        </button>
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, type: "spring", bounce: 0.4 }}
        className="overflow-hidden relative posts"
      >
        <div
          className="flex transition-transform duration-500 gap-5"
          style={{
            transform: `translateX(-${Math.min(
              activeIndex * (100 / cardsPerView),
              maxIndex * (100 / cardsPerView)
            )}%)`,
          }}
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 p-3 min-h-[350px] flex flex-col justify-between"
              style={{
                width:
                  window.innerWidth >= 1024
                    ? "calc(100% / 2.5)"
                    : window.innerWidth >= 768
                    ? "50%"
                    : "100%",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[250px] object-cover object-center mb-3"
              />
              <p className="text-gray-400 text-sm">
                {post.date} • {post.readTime}
              </p>
              <h3 className="font-semibold text-lg my-1">{post.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-3">
                {post.description}
              </p>
              <a
                href={post.link}
                className="text-[#9188F1] font-semibold mt-2 block"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center gap-4 mt-5">
        <button
          className={`p-3 bg-white ring-1 ring-gray-300 cursor-pointer shadow-md rounded-full transition ${
            activeIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#9188F1] group"
          }`}
          onClick={prevSlide}
          disabled={activeIndex === 0}
        >
          <IoIosArrowBack className="text-gray-700  transition group-hover:text-white" />
        </button>

        <button
          className={`p-3 bg-white ring-1 ring-gray-300 cursor-pointer shadow-md rounded-full transition ${
            activeIndex >= maxIndex
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#9188F1] group"
          }`}
          onClick={nextSlide}
          disabled={activeIndex >= maxIndex}
        >
          <IoIosArrowForward className="text-gray-700 transition group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
