import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const AyurvedasAppoarch = () => {
    const cards = [
        {
            id: 1,
            title: "Make Appointment",
            description: "You must make an appointment in advance, to choose the service and date.",
        },
        {
            id: 2,
            title: "Consultation",
            description: "Our practitioners will assess your health and provide personalized recommendations.",
        },
        {
            id: 3,
            title: "Treatment Plan",
            description: "A customized treatment plan will be created based on your unique needs.",
        },
        {
            id: 4,
            title: "Follow-Up",
            description: "Regular follow-ups to monitor progress and adjust treatments as necessary.",
        },
    ];

    return (
        <div className="bg-[#fdfdf6] py-16 px-6">
            <div>
                <h2 className="text-center md:text-4xl text-2xl font-extrabold text-[#3A643B] mb-6">
                    <span className="md:border-b-4 border-[#C3D0C4]"> Our Ayurvedic Approach</span>
                </h2>
                <p className="text-center text-gray-700 text-md md:w-3/6 mx-auto mb-10">
                    At Amrutam, we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
                </p>
            </div>
            <div className="container mx-auto">
                {/* Swiper for Small Devices */}
                <div className="block md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="swiper-container"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div
                                    className="bg-[#FFF7E2] rounded-xl border-t-4 border-[#3A643B] shadow-md text-center flex flex-col items-center justify-center px-5 py-8 mx-auto"
                                    style={{ width: '260px', height: '315px' }}
                                >
                                    <div className="rounded-full bg-[rgba(58,100,59,0.66)] w-16 h-16 flex items-center justify-center mb-4">
                                        <span className="text-white font-bold text-2xl">{card.id}</span>
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-bold text-[#3A643B] text-center">
                                        {card.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-2 text-center">
                                        {card.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Grid for Medium and Larger Devices */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#FFF7E2] rounded-xl border-t-4 border-[#3A643B] shadow-md text-center flex flex-col items-center justify-center px-5 py-8"
                            style={{ width: '290px', height: '315px' }}
                        >
                            <div className="rounded-full bg-[rgba(58,100,59,0.66)] w-16 h-16 flex items-center justify-center mb-4">
                                <span className="text-white font-bold text-2xl">{card.id}</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-[#3A643B] text-center">
                                {card.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-2 text-center">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AyurvedasAppoarch;
