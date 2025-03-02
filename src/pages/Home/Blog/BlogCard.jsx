import { FiMessageCircle } from "react-icons/fi";

const BlogCard = ({ Count, Writer }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 w-[80%]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full group">
        <div className="relative">
          {/* صورة المقال */}
          <img
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
            alt="Mountain"
            className="w-full h-64 object-cover"
          />

          {/* الـ Overlay اللي بيظهر عند الـ Hover */}
          <div className="absolute inset-0 bg-[#756cd5be] cursor-pointer bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <FiMessageCircle className="text-3xl mb-2 " />
            <p className="text-lg font-semibold">قراءة المزيد</p>
          </div>
        </div>

        {/* محتوى المقال */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Beautiful Mountain View
          </h2>
          <p className="text-gray-400 leading-tight mb-4 flex gap-2 items-center justify-center">
            By {Writer} <FiMessageCircle />
            {Count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
