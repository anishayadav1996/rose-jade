import React from 'react'

export default function Clientsays() {
  return (
    <>
    <div div className='bg-secondary'>
            <div className='container mx-auto xl:px-16 py-5  mt-5 md:lg-100 sm:md-16'>
                <div className='text-center'>
                <h2 className="capitalize text-h2 mb-7 font-bold hover:text-primary text-white">
               What Client Says About Us 
                    </h2> 
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-5 text-center mb:py-5 px-16 gap-4 sm:py-1 ">
                    <div className="max-w-sm py-6 rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="mb:w-40 mb:h-40 sm:w-20 sm:h-20 mx-auto rounded-full object-fill" src="src/assets/img/test1.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 pt-4">
                            <p className="text-gray-dark text-h4 leading-6 ">Emma L</p>
                        <span className='text-gray-dark leading-8 '>Small Business Owner</span>
                        <p className="text-gray-dark pt-4 leading-6 text-justify">
                        Rose Jade Inc. has been a game-changer for our business. Their team didn’t just provide solutions—they took the time to understand our challenges and worked with us every step of the way. We’re thriving today because of their expertise and dedication
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm py-6 rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="mb:w-40 mb:h-40 sm:w-20 sm:h-20 mx-auto rounded-full object-fill" src="src/assets/img/test2.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 pt-4">
                            <p className="text-gray-dark text-h4 leading-6 ">Raj K.</p>
                        <span className='text-gray-dark leading-8 '>Entrepreneur</span>
                        <p className="text-gray-dark pt-4 leading-6 text-justify">
                        Working with Rose Jade Inc. feels like having an extension of our team. Their personalized approach and innovative strategies have helped us grow in ways we never imagined. They truly care about our success.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm py-6 rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="mb:w-40 mb:h-40 sm:w-20 sm:h-20 mx-auto rounded-full object-fill" src="src/assets/img/test3.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 pt-4">
                            <p className="text-gray-dark text-h4 leading-6 ">Samantha R.</p>
                        <span className='text-gray-dark leading-8 '>Founder, Boutique Store</span>
                        <p className="text-gray-dark pt-4 leading-6 text-justify">
                        Rose Jade Inc. is the partner every small business needs. Their support has been invaluable, and their commitment to our growth is unmatched. We’re so grateful for everything they’ve done for us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}
