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
        <div className='text-white py-5 bg-secondary'>
        <div className="xl:container sm:px-6 lg:px-16 mx-auto">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-5 py-5 md:gap-12 gap-12">
                    <div className="py-5 flex items-center">
                        <div className='px-6'>
                        <h1 className="capitalize xl:text-h1 mb-7 md:text-h2 lg:text-h2 text-h3">
                        <p className=' lg:leading-[70px] md:leading-[50px] '>Empowering Small Businesses with</p>
                        <p className='font-bold lg:leading-[80px] leading-15'>Seamless Funding Solutions</p>
                        </h1>
                            <p className='mb-6 leading-8 text-h5 text-justify'>At Rose Jade Inc., we provide fast, flexible, and accessible financial solutions designed to fuel your business growth. Whether you're looking for a Business Cash Advance, Line of Credit, or Equipment Financing, we’re here to support your journey.</p>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-12 my-5 text-center py-5 ">
                                <div className="bg-white text-gray-dark rounded-lg px-4 py-6">15+ <br />Year Experience</div>
                                <div className='bg-white text-gray-dark rounded-lg px-4 py-6 '>75% <br /> Growth Rate</div>
                                <div className='bg-white text-gray-dark rounded-lg px-4 py-6' >120 <br /> Active Currently</div>
                            </div>
                            <div>
                                <Link onClick={scrollToTop} to="service" className=" bg-white bg-transparent  text-gray-dark rounded-full mt-5 py-2 px-4  hover:bg-primary hover:text-white transition-all duration-500">Get Stated</Link> 
                                
                                </div>
                        </div>
                    </div>
                    <div className="ml-auto px-6"><img className = "rounded-lg w-full h-full md:w-full" src=" src/assets/img/3-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero
