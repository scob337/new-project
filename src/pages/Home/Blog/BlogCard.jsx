const BlogCard = ({ Writer, Title , Src}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 w-[100%]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full group">
        <div className="relative">
          <img src={Src} alt="Mountain" className="w-full h-64 object-cover" />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            {Title}
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
