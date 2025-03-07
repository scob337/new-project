
const BlogCard = ({  Writer }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 w-[80%]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full group">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
            alt="Mountain"
            className="w-full h-64 object-cover"
          />

        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Beautiful Mountain View
          </h2>
          <p className="text-gray-400 leading-tight mb-4 flex gap-2 items-center justify-center">
            By {Writer} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
