import React from "react";
import bannerImage from "../../../public/images/banner1.png"; // Adjust the path as necessary
import bannerImage2 from "../../../public/images/banner2.png"; 

const Banner = () => {
  return (
    <div className="relative h-[639px] flex items-center px-10 md:px-20 overflow-hidden bg-gradient-to-r from-red-950/10 via-black/60 to-black">
      {/* Background Image */}
      <div className="flex">
        {/* Text Content */}
        <div className="relative z-10 text-white w-3/4">
          <p className="text-lg opacity-90 mb-4">Namaste, Welcome to Amrutam</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Step into Holistic Healing with Ayurveda Book Consultation With Certified Experts.
           
          </h1>
        
          <p className="text-lg leading-relaxed mb-8 w-3/4">
            Dive into the world of ayurveda and experience personalized health
            solutions and holistic guidance from trusted ayurvedic doctors
            anytime, anywhere.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-8 py-4">
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Large device background image (bannerImage) */}
        <div
          className="absolute inset-0 w-full hidden md:block"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="bg-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-black/90 to-transparent"></div>
        </div>

        {/* Small device background image (bannerImage2) */}
        <div
          className="absolute inset-0 w-full block md:hidden"
          style={{
            backgroundImage: `url(${bannerImage2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="bg-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-black/90 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
