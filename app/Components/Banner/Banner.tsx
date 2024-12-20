import bannerImage from "../../../public/images/banner1.png"; // Adjust the path as necessary
import bannerImage2 from "../../../public/images/banner2.png"; 

const Banner = () => {
  return (
    <div className="relative h-[639px] flex items-center px-3 md:px-20 overflow-hidden bg-gradient-to-r from-red-950/10 via-black/60 to-black">
      {/* Background Image */}
      <div className="flex">
        {/* Text Content */}
        <div className="relative z-10 text-white md:w-3/4 max-sm:w-full">
          <p className="md:text-lg opacity-90 mb-4 w-full font-thin">Namaste, Welcome to Amrutam</p>
          <h1 className="text-lg md:text-5xl font-bold mb-4 leading-tight max-sm:text-sm max-sm:w-5/6 ">
            Step into Holistic Healing with Ayurveda Book Consultation With Certified Experts.
          </h1>
          <p className=" leading-relaxed mb-8 md:w-3/4 max-sm:w-full max-sm:font-thin ">
            Dive into the world of ayurveda and experience personalized health
            solutions and holistic guidance from trusted ayurvedic doctors
            anytime, anywhere.
          </p>
          <button className="bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg  md:py-4 p-4">
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Large device background image (bannerImage) */}
        <div
          className="absolute inset-0 w-full hidden md:block "
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
        
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-black/90 to-transparent"></div>
        </div>

        {/* Small device background image (bannerImage2) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center block md:hidden"
          style={{
            backgroundImage: `url(${bannerImage2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="bg-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
