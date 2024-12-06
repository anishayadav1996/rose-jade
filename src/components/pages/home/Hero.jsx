import React from 'react'

function Hero() {
    return (
        <>
        <div className='text-white py-5 bg-secondary'>
            <div className="container mx-auto px-16">
                <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-10 ">
                    <div className="py-5 flex items-center">
                        <div className=''>
                        <h1 className="capitalize text-h1 mb-7 ">
                        <p className='text-white leading-[70px]'>Empowering Small Businesses with</p>
                        <p className='font-bold text-white  leading-[80px]'>Seamless Funding Solutions</p>
                        </h1>
                            <p className='mb-6 leading-8 text-h5'>At Rose Jade Inc., we provide fast, flexible, and accessible financial solutions designed to fuel your business growth. Whether you're looking for a Business Cash Advance, Line of Credit, or Equipment Financing, we’re here to support your journey.</p>
                            <div class="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-white text-gray-dark rounded-lg px-4 py-6">15+ <br />Year Experience</div>
                                <div className='bg-white text-gray-dark rounded-lg px-4 py-6 '>75% <br /> Growth Rate</div>
                                <div className='bg-white text-gray-dark rounded-lg px-4 py-6' >120 <br /> Active Currently</div>
                            </div>
                            <div><button className=" bg-white  text-gray-dark rounded-full mt-5 w-40 h-10 hover:bg-primary hover:text-white transition-all duration-500">Get Stated</button></div>
                        </div>
                    </div>
                    <div className="ml-auto"><img className = "rounded-lg w-auto h-[400px]" src=" src/assets/img/3-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero
