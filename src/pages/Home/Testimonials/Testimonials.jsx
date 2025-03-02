import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import testimonialsData from "./Data";
import TestimonialCard from "./TestimonialsCard";
import TestimonialsHeader from "./TestimonialsHeader";

const Testimonials = () => {
  return (
    <div className="min-h-[70vh] overflow-visible bg-[#9188F1] px-5 py-10 flex flex-col gap-20">
      <TestimonialsHeader />
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        className="pb-14 w-full overflow-visible" 
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center mb-10 overflow-visible" 
          >
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
