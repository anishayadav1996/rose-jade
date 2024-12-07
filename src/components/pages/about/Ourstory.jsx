import React from 'react'

export default function Ourstory() {
    return (
        <>
            <div className="container px-16 mx-auto py-20">
                <h2 className="capitalize lg:text-h1 font-bold text-primary  mb-5 leading-[50px] text-center">Our Story</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 text-center py-5 ">
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light text-5 mt-3 font-bold'>A Dream Born from Passion</h2>
                            <p className="text-gray-dark text-h6 text-justify">Every great journey starts with a vision, and for Rose Jade Inc., that vision was simple yet transformative: to empower small businesses to thrive in a world where they often face disproportionate challenges. Inspired by the resilience and creativity of entrepreneurs, our founders embarked on a mission to make a difference, one business at a time.</p>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light text-5 mt-3 font-bold'>The Meaning Behind the Name</h2>
                            <p className="text-gray-dark text-h6 text-justify">
                                The name Rose Jade is not just a brand—it’s a promise. The rose represents strength, beauty, and perseverance in the face of adversity, while jade symbolizes wisdom, prosperity, and growth. Together, they reflect our commitment to helping businesses bloom and flourish, no matter how tough the journey.</p>

                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light text-5 mt-3 font-bold'>Building a Movement, Not Just a Business</h2>
                            <p className="text-gray-dark text-h6 text-justify">
                                Rose Jade Inc. was born out of real-world entrepreneurial experiences. Our founders knew firsthand the sleepless nights, relentless dedication, and uphill battles that small business owners face. They recognized the need for a partner who not only offers solutions but also deeply understands the challenges of building a business from the ground up.
                            </p></div>
                    </div>
                    {/* <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light text-5 mt-3'>Looking Forward to the Future</h2>
                            <p className="text-gray-dark text-h6 text-justify">
                                Rose Jade Inc. is committed to writing the next chapter of its story alongside businesses like yours. As your trusted partner, we’ll walk with you through every challenge and celebrate every success. Together, we’re not just building businesses—we’re building a brighter future.
                            </p>
                            </div>
                    </div> */}
                </div>
            </div>

        </>


    )
}
