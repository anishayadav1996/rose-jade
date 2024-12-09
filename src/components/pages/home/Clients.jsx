import React from 'react'

export default function Clients() {
    return (
        <div div className='bg-secondary'>
            {/* <div className='container mx-auto px-16 py-5 sm:mt-3  text-white'> */} 
            <div className='container mx-auto px-16 py-5  mt-5 lg:mb-96 sm:mb-96'>
                <div className='text-center'>
                <h2 className="capitalize text-h2 mb-7 text-white">
                words of trust testimonials <br />
                        <p className='font-bold text-primary text-h1 leading-[60px]'>from Satisfied clients</p>
                    </h2>
                    {/* <p className='text-h5 w-70'>B was just great at what he does.  <br />Mollitia enim quam cumque reprehenderit ullam! Maiores aspernatur officia </p> */}
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-5 text-center mb:py-5  gap-4 sm:py-1 ">
                    <div className="max-w-sm py-6 rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="mb:w-40 mb:h-40 sm:w-20 sm:h-20 mx-auto rounded-full object-fill" src="src/assets/img/test1.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 pt-4">
                            <p className="text-gray-dark text-h4 leading-6 ">Ravi Mehta</p>
                        <span className='text-gray-dark leading-8 '>Retail Store Owner</span>
                        <p className="text-gray-dark pt-4 leading-6 text-justify">
                        Rosejade provided the financial support my business needed when traditional banks wouldn’t. Their Merchant Cash Advance (MCA) solution was fast, hassle-free, and perfectly aligned with my needs. Highly recommended
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm py-6 rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="mb:w-40 mb:h-40 sm:w-20 sm:h-20 mx-auto rounded-full object-fill" src="src/assets/img/test2.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 pt-4">
                            <p className="text-gray-dark text-h4 leading-6 ">Anjali Verma</p>
                        <span className='text-gray-dark leading-8 '>Marketing Agency Founder</span>
                        <p className="text-gray-dark pt-4 leading-6 text-justify">
                        Working with Rosejade has been a game-changer for our business. The expert advice and tailored solutions they offer make them stand out in the financial sector. I couldn’t have asked for a better funding partner.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm py-6 rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="mb:w-40 mb:h-40 sm:w-20 sm:h-20 mx-auto rounded-full object-fill" src="src/assets/img/test3.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 pt-4">
                            <p className="text-gray-dark text-h4 leading-6 ">Manoj Sharma</p>
                        <span className='text-gray-dark leading-8 '>E-commerce Entrepreneur</span>
                        <p className="text-gray-dark pt-4 leading-6 text-justify">
                        I was impressed with how quickly Rosejade processed my funding request. Their Merchant Cash Advance option gave me the flexibility I needed to manage my cash flow without stress. Thank you, Rosejade!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
