import React, { useEffect, useState } from "react";
import CustomerReviewCart from "./CustomerReviewCart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active card index

  // Fetch the JSON file from the public folder
  useEffect(() => {
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data.reviews))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="bg-[#FFF7E2] py-20 px-6">
      <h2 className="text-center md:text-4xl text-2xl font-extrabold text-[#3A643B] mb-6">
        <span className="md:border-b-4 border-[#C3D0C4]">
          Stories From Our Valued Customers!
        </span>
      </h2>

      {/* Swiper for Small, Medium, and Large Devices */}
      <div className="container mx-auto">
        <Swiper
          loop={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1, // Show 1 card on mobile
            },
            768: {
              slidesPerView: 2, // Show 2 cards on tablet
            },
            1024: {
              slidesPerView: 3, // Show 3 cards on desktop
            },
          }}
          className="swiper-container"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <CustomerReviewCart
                review={review}
                isActive={activeIndex === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
