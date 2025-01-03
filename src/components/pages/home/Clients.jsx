import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

export default function Clients() {
    return (
        <div className="bg-secondary ">
            <div className="xl:container  lg:px-16 mx-auto  mt-5 py-20 sm:px-6">
                <div className="text-center">
                    <h2 className="capitalize text-h3 mb-7  text-white font-bold">
                        What Client Says About Us

                        {/* <p className="font-bold text-primary text-h1 leading-[60px]">from Satisfied clients</p> */}
                    </h2>
                </div>
                <div className="xl:container lg:px-16 mx-auto sm:py-10 sm:px-6 px-6">
                    <Slider {...settings}>
                        <div className="py-6 px-4">
                            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[550px] flex flex-col justify-between pt-6">
                                <div className=' bg-cover bg-center bg-no-repeat'
                                    style={{ backgroundImage: "url('src/assets/img/Circle.png')" }}>
                                    <img
                                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto sm:my-5 my-8 rounded-full object-cover object-right-top"
                                        src="src/assets/img/test1.jpg"
                                        alt="Client 1"
                                    />
                                </div>

                                <div className="px-4  pt-4 text-center flex-grow">
                                    <p className=" font-bold">
                                        Emma L
                                    </p>
                                    <span className="">
                                        Small Business Owner
                                    </span>
                                    <p className=" text-h5 pt-3 text-justify px-6">
                                        I was impressed with how quickly Rose Jade processed my funding request. Their Merchant Cash Advance option gave me the flexibility I needed to manage my cash flow without stress. Thank you, Rose Jade!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-4">
                            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[550px] flex flex-col justify-between pt-6">
                                <div className=' bg-cover bg-center bg-no-repeat'
                                    style={{ backgroundImage: "url('src/assets/img/Circle.png')" }}>
                                    <img
                                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto sm:my-5 my-8 rounded-full object-cover object-right-top"
                                        src="src/assets/img/test2.jpg"
                                        alt="Client 2"
                                    />
                                </div>
                                <div className="px-4  pt-4 text-center flex-grow">
                                    <p className=" font-bold">
                                        Raj K.
                                    </p>
                                    <span className="">
                                        Entrepreneur
                                    </span>
                                    <p className=" text-h5 pt-3 text-justify px-6">
                                        Rose Jade provided the financial support my business needed when traditional banks wouldn’t. Their Merchant Cash Advance solution was fast, flexible, hassle-free, and perfectly aligned with my needs. Highly recommended!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-4">
                            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[550px] flex flex-col justify-between pt-6">
                                <div className=' bg-cover bg-center bg-no-repeat'
                                    style={{ backgroundImage: "url('src/assets/img/Circle.png')" }}>
                                    <img
                                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto sm:my-5 my-8 rounded-full object-cover object-right-top"
                                        src="src/assets/img/test3.jpg"
                                        alt="Client 3"
                                    />
                                </div>
                                <div className="px-4  pt-4 text-center flex-grow">
                                    <p className="font-bold">
                                        Samantha R.
                                    </p>
                                    <span className=" ">
                                        Founder, Boutique Store
                                    </span>
                                    <p className=" text-h5 pt-3 text-justify px-6">
                                        Working with Rosejade has been a game-changer for our business. The expert advice and tailored
                                        solutions they offer make them stand out in the financial sector. I couldn’t have asked for a
                                        better funding partner!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
