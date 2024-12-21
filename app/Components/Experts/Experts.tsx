import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { MdKeyboardArrowRight } from "react-icons/md";

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/experts.json") // Ensure the JSON file is in the public folder
      .then((response) => response.json())
      .then((data) => setExperts(data.experts || []))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="bg-[#f8f8f8] py-16 px-4 sm:px-6 lg:px-8 ">
      {/* Title */}
      <h2 className="container mx-auto text-center text-2xl sm:text-3xl font-bold text-[#3A643B] mb-20">
        <span className="md:border-b-4 border-[#C3D0C4]"> Meet Our Ayurveda Experts</span>
       
      </h2>

      {/* Swiper Slider */}
      <div className=" relative mx-auto">
        {experts.length > 0 ? (
          <Swiper
            loop={true}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={-90} // Reduced space between cards
            slidesPerView={1} // Default for mobile
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 5 }, // Small screens
              768: { slidesPerView: 2, spaceBetween: 10 }, // Medium screens
              1024: { slidesPerView: 3, spaceBetween: 15 }, // Large screens
            }}
            className="relative"
          >
            {experts.map((expert, index) => (
              <SwiperSlide key={index}>
                {/* Expert Card */}
                <div className="flex justify-center">
                  <div className="bg-[#FFF7E2] rounded-[2rem] shadow-md flex flex-col items-center relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[280px] h-[400px]">
                    {/* Image */}
                    <div className="relative mt-8 mb-4">
                      <img
                        src={expert.image}
                        alt={`Photo of ${expert.name}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-md"
                      />
                      {/* Rating */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-full px-2 py-1 flex items-center">
                        <span className="font-bold">{expert.rating || "N/A"}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-4 h-4 text-yellow-500 ml-1"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.38 4.253h4.462c.969 0 1.371 1.24.588 1.81l-3.616 2.52 1.38 4.253c.3.921-.755 1.688-1.54 1.118L10 12.347l-3.616 2.52c-.785.57-1.84-.197-1.54-1.118l1.38-4.253-3.616-2.52c-.783-.57-.38-1.81.588-1.81h4.462l1.38-4.253z" />
                        </svg>
                      </div>
                    </div>
                    {/* Details */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4 text-center">
                      {expert.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">{expert.title}</p>
                    <p className="text-sm text-gray-500 mt-2 flex items-center text-center">
                      {expert.experience}
                    </p>
                    <span className="px-3 py-1 bg-[#F0F8F4] text-[#3A643B] rounded-full text-xs mt-2 text-center">
                      {expert.specialization}
                    </span>

                    {/* Button */}
                    <button className="mt-auto bg-[#3A643B] h-[55px] text-white w-full rounded-b-[2rem] hover:bg-[#2F5232] transition-all text-sm">
                      {expert.action}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">No experts available.</p>
        )}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev custom-nav-btn hidden max-sm:block"></div>
        <div className="swiper-button-next custom-nav-btn hidden max-sm:block"></div>
      </div>

      {/* Find More Button */}
      <div className="text-center mt-8">
        <button className="btn btn-outline btn-success">
          Find more experts <MdKeyboardArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Experts;