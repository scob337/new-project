import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import BlogImg1 from '../../assets/images/Blog1.jfif'
import BlogImg2 from "../../assets/images/Blog2.jfif";
import BlogImg3 from "../../assets/images/Blog3.jfif";
const blogPosts = [
  {
    id: 1,
    image: BlogImg1,
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
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    if (activeIndex < blogPosts.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-5 relative overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-3">
        Check Our <span className="text-[#9188F1]">Blogs</span>
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Smart Gifting Ideas For Every Occasion!
      </p>

      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          className="absolute left-0 z-10 p-3 bg-white shadow-md rounded-full hover:bg-[#DBF880] transition"
          onClick={prevSlide}
        >
          <IoIosArrowBack className="text-gray-700" />
        </button>

        <div className="flex gap-5 w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="w-[40%] p-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[100%] h-[250px] object-cover object-center mb-3"
                />
                <p className="text-gray-400 text-sm">
                  {post.date} • {post.readTime}
                </p>
                <h3 className="font-semibold text-lg my-1">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.description}</p>
                <a
                  href={post.link}
                  className="text-[#9188F1] font-semibold mt-2 block"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className="absolute right-0 z-10 p-3 bg-white shadow-md rounded-full hover:bg-[#DBF880] transition"
          onClick={nextSlide}
        >
          <IoIosArrowForward className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
