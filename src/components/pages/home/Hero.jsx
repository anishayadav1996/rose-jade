import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className='text-white py-5 bg-secondary '>
                <div className="xl:container  px-6 lg:px-16 mx-auto">
                    <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:my-5 sm:py-5 md:gap-12 gap-12">
                        <div className="py-2 flex items-center">
                            <div className='px-6'>
                                <h1 className="capitalize xl:text-h2 mb-7 md:text-h3 lg:text-h3 text-h5 leading-8">
                                    <p className=' lg:leading-[70px] md:leading-[50px] '>Empowering Your Business with Fast, Flexible Financing.</p>
                                    <p className='font-bold lg:leading-[65px] leading-15 md:leading-[40px]'>Unlock growth opportunities with fast and flexible business funding options tailored to your needs.</p>
                                </h1>
                                <p className='mb-6 leading-8 text-h5 text-justify'>At Rose Jade Inc, we specialize in Merchant Cash Advances (MCA), Line of Credit, and Equipment Financing, empowering small businesses to streamline operations and boost revenue. Our hassle-free solutions offer quick access to funds, ensuring you can seize new opportunities and achieve sustainable growth.</p>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-5 text-center py-5 ">
                                    <div className="bg-white text-gray-dark rounded-lg px-4 py-6">15+ <br />Year Experience</div>
                                    <div className='bg-white text-gray-dark rounded-lg px-4 py-6 '>75% <br /> Growth Rate</div>
                                    <div className='bg-white text-gray-dark rounded-lg px-4 py-6' >120 <br /> Active Currently</div>
                                </div>
                                <div>
                                    <Link onClick={scrollToTop} to="service" className=" bg-white bg-transparent  text-gray-dark rounded-full mt-5 py-2 px-4  hover:bg-primary hover:text-white transition-all duration-500">Get Stated</Link>

                                </div>
                            </div>
                        </div>
                        <div className="px-6"><img className="rounded-lg w-full h-full md:w-full object-cover" src=" src/assets/img/hero.jpg" alt="hero-img" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
