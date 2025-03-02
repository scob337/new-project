import { FaSearch } from "react-icons/fa"; // أيقونة البحث (ممكن تغيّرها لأي حاجة تانية)
import MainTitle from "../../../Components/sharedComponents/MainTitle";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src={image}
            alt={`Gallery image ${index + 1}`}
          />

          <div className="absolute cursor-pointer inset-0 bg-[#756cd5be] bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <FaSearch className="text-3xl mb-2" />
            <p className="text-lg font-semibold">عرض التفاصيل</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const GalleryPage = () => {
  const images = [
    "https://pagedone.io/asset/uploads/1688025668.png",
    "https://pagedone.io/asset/uploads/1688029344.png",
    "https://pagedone.io/asset/uploads/1688029370.png",
    "https://pagedone.io/asset/uploads/1688029384.png",
    "https://pagedone.io/asset/uploads/1688029394.png",
    "https://pagedone.io/asset/uploads/1688029408.png",
    "https://pagedone.io/asset/uploads/1688029424.jpg",
    "https://pagedone.io/asset/uploads/1688029434.png",
    "https://pagedone.io/asset/uploads/1688029447.jpg",
  ];

  return (
      <div className="mt-50 p-5">
          <MainTitle ColorTitle="epically" Title="Designed To Work" />
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryPage;
