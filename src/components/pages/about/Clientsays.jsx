import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Clientsays() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // For screens <= 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // For screens <= 640px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="bg-secondary">
                <div className="xl:container px-6 lg:px-16 mx-auto py-20">
                    <div className="text-center">
                        <h2 className="capitalize text-h2 mb-7 font-bold hover:text-primary text-white text-lg md:text-2xl lg:text-3xl">
                            What Client Says About Us
                        </h2>
                    </div>
                    <div className="xl:container px-6 lg:px-16 mx-auto py-10">
                        <Slider {...settings}>
                            <div className="py-6 px-4">
                                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                                    <img
                                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full object-cover object-right-top"
                                        src="src/assets/img/test1.jpg"
                                        alt="Client 1"
                                    />
                                    <div className="px-4 sm:px-6 pt-4 text-center">
                                        <p className="text-gray-dark text-sm sm:text-base md:text-lg font-bold">
                                            Emma L
                                        </p>
                                        <span className="text-gray-dark text-xs sm:text-sm md:text-base">
                                            Small Business Owner
                                        </span>
                                        <p className="text-gray-dark pt-4 text-xs sm:text-sm md:text-base leading-6 text-justify">
                                            Rosejade provided the financial support my business needed when traditional banks wouldn’t. Their
                                            Merchant Cash Advance (MCA) solution was fast, hassle-free, and perfectly aligned with my needs.
                                            Highly recommended.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-4">
                                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                                    <img
                                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full object-cover object-right-top"
                                        src="src/assets/img/test2.jpg"
                                        alt="Client 2"
                                    />
                                    <div className="px-4 sm:px-6 pt-4 text-center">
                                        <p className="text-gray-dark text-sm sm:text-base md:text-lg font-bold">
                                            Raj K.
                                        </p>
                                        <span className="text-gray-dark text-xs sm:text-sm md:text-base">
                                            Entrepreneur
                                        </span>
                                        <p className="text-gray-dark pt-4 text-xs sm:text-sm md:text-base leading-6 text-justify">
                                            Working with Rosejade has been a game-changer for our business. The expert advice and tailored
                                            solutions they offer make them stand out in the financial sector. I couldn’t have asked for a
                                            better funding partner
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-4">
                                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                                    <img
                                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full object-cover object-right-top"
                                        src="src/assets/img/test3.jpg"
                                        alt="Client 3"
                                    />
                                    <div className="px-4 sm:px-6 pt-4 text-center">
                                        <p className="text-gray-dark text-sm sm:text-base md:text-lg font-bold">
                                            Samantha R.
                                        </p>
                                        <span className="text-gray-dark text-xs sm:text-sm md:text-base">
                                            Founder, Boutique Store
                                        </span>
                                        <p className="text-gray-dark pt-4 text-xs sm:text-sm md:text-base leading-6 text-justify">
                                            I was impressed with how quickly Rosejade processed my funding request. Their Merchant Cash
                                            Advance option gave me the flexibility I needed to manage my cash flow without stress. Thank
                                            you, Rosejade!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}
