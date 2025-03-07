import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const blogPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1527998257557-0c18b22fa4cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9saWRheXxlbnwwfHwwfHx8MA%3D%3D",
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "The Ultimate Guide to Stress-Free Gifting",
    description:
      "Ever struggled to find the perfect gift? With Cadonizer, you can say goodbye to last-minute shopping stress. Learn how our app makes gifting easy, thoughtful, and fun for every occasion!",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1527998257557-0c18b22fa4cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9saWRheXxlbnwwfHwwfHx8MA%3D%3D",
    date: "March 18, 2024",
    readTime: "6 min read",
    title: "How Group Gifting Makes Dreams Come True",
    description:
      "Ever struggled to find the perfect gift? With Cadonizer, you can say goodbye to last-minute shopping stress. Learn how our app makes gifting easy, thoughtful, and fun for every occasion!",
    link: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1527998257557-0c18b22fa4cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9saWRheXxlbnwwfHwwfHx8MA%3D%3D",
    date: "March 16, 2024",
    readTime: "7 min read",
    title: "Top 5 Occasions to Use Cadonizer",
    description:
      "Ever struggled to find the perfect gift? With Cadonizer, you can say goodbye to last-minute shopping stress. Learn how our app makes gifting easy, thoughtful, and fun for every occasion!",
    link: "#",
  },
];

const BlogSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-5 relative">
      <h1 className="text-3xl font-bold text-center mb-3">
        Check Our <span className="text-[#9188F1]">Blogs</span>
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Smart Gifting Ideas For Every Occasion!
      </p>

      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          className="absolute left-[-30px] z-10 p-3 bg-white shadow-md rounded-full hover:bg-[#DBF880] transition"
          onClick={prevSlide}
        >
          <IoIosArrowBack className="text-gray-700" />
        </button>

        <div className="flex gap-5 overflow-hidden w-full">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`min-w-[300px] transition-all duration-500 transform ${
                index === activeIndex ? "scale-100" : "scale-90 opacity-50"
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-lg mb-3"
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

        {/* Right Button */}
        <button
          className="absolute right-[-30px] z-10 p-3 bg-white shadow-md rounded-full hover:bg-[#DBF880] transition"
          onClick={nextSlide}
        >
          <IoIosArrowForward className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
