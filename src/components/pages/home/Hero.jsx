import React from 'react'

function Hero() {
    return (
        <>
        <div className='text-white py-5 bg-secondary'>
        <div className="xl:container px-6 lg:px-16 mx-auto">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-5 py-5 md:gap-12">
                    <div className="py-5 flex items-center">
                        <div className=''>
                        <h1 className="capitalize xl:text-h1 mb-7 md:text-h3 sm:text-h4">
                        <p className=' lg:leading-[70px] md:leading-[50px] '>Empowering Small Businesses with</p>
                        <p className='font-bold leading-[80px]'>Seamless Funding Solutions</p>
                        </h1>
                            <p className='mb-6 leading-8 text-h5 text-justify'>At Rose Jade Inc., we provide fast, flexible, and accessible financial solutions designed to fuel your business growth. Whether you're looking for a Business Cash Advance, Line of Credit, or Equipment Financing, we’re here to support your journey.</p>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-12 my-5 text-center py-5 ">
                                <div className="bg-white text-gray-dark rounded-lg px-4 py-6">15+ <br />Year Experience</div>
                                <div className='bg-white text-gray-dark rounded-lg px-4 py-6 '>75% <br /> Growth Rate</div>
                                <div className='bg-white text-gray-dark rounded-lg px-4 py-6' >120 <br /> Active Currently</div>
                            </div>
                            <div><button className=" bg-white  text-gray-dark rounded-full mt-5 w-40 h-10 hover:bg-primary hover:text-white transition-all duration-500">Get Stated</button></div>
                        </div>
                    </div>
                    <div className="ml-auto"><img className = "rounded-lg w-auto h-[400px] md:w-full" src=" src/assets/img/3-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero
