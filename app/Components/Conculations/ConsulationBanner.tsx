const ConsulationBanner = () => {
  return (
    <div className="ConculationsBG bg-fixed bg-cover bg-center relative h-[590px]">
      {/* Overlay and Content */}
      <div className="bg-black w-full h-full bg-opacity-40 flex flex-col items-center justify-center text-center absolute top-0 left-0 right-0 bottom-0 px-4">
        {/* Text */}
        <div className="w-[900px]">
          <h1 className="text-7xl font-light text-white flex flex-col gap-5">
            Ready to restore harmony in
            <span>your mind, body, and spirit?</span>
          </h1>

          {/* Space between text and button */}
          <div className="mt-20">
            <button className="bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg md:py-4 px-8">
              Book a consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsulationBanner;
