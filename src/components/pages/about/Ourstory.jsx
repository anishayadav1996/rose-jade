import React from 'react'

export default function Ourstory() {
    return (
        <>
            <div className="xl:container px-6 lg:px-16 mx-auto py-20">
                <h2 className="capitalize lg:text-h2 font-bold text-primary  mb-5 leading-[50px] text-center text-h3">Our Story</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-5 text-center py-5 ">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light mb-2 mt-3 font-bold px-5'>A Dream Born from Passion</h2>
                            <p className="px-6  text-gray-dark text-h6 text-justify">Every great journey starts with a vision, and for Rose Jade Inc., that vision was simple yet transformative: to empower small businesses to thrive in a world where they often face disproportionate challenges. Inspired by the resilience and creativity of entrepreneurs, our founders embarked on a mission to make a difference, one business at a time.</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className=" py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light mb-2 mt-3 font-bold px-4'>The Meaning Behind the Name</h2>
                            <p className="text-gray-dark text-h6 text-justify px-6">
                                The name Rose Jade is not just a brand—it’s a promise. The rose represents strength, beauty, and perseverance in the face of adversity, while jade symbolizes wisdom, prosperity, and growth. Together, they reflect our commitment to helping businesses bloom and flourish, no matter how tough the journey.</p>

                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className=" py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light mb-2 mt-3 font-bold px-4'>Building a Movement, Not Just a Business</h2>
                            <p className="text-gray-dark text-h6 text-justify px-6">
                                Rose Jade Inc. was born out of real-world entrepreneurial experiences. Our founders knew firsthand the sleepless nights, relentless dedication, and uphill battles that small business owners face. They recognized the need for a partner who not only offers solutions but also deeply understands the challenges of building a business from the ground up.
                            </p></div>
                    </div>

                </div>
            </div>

        </>


    )
}