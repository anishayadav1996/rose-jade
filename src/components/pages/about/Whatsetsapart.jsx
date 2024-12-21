import React from 'react'

export default function Whatsetsapart() {
  return (
    <>
       <div div className=' bg-white'>
            <div className='xl:container mx-auto px-6 lg:px-16 text-gray-dark py-5'>
                <div className='text-center  '>
                    <h2 className="capitalize text-h2 mb-7  font-bold">
                    What Sets Us Apart? 
                    </h2>
                    <p className=' text-h5 '>At Rose Jade Inc., we don’t believe in a one-size-fits-all approach. Here’s what makes us different:</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 text-justify py-5 sm:px-6">
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-semibold text-h5 text-secondary leading-6">Fast and Hassle-Free Funding</p>
                            <span className='text-gray-dark leading-8 text-6'>We understand the urgency of business needs, which is why our funding process is quick and straightforward.
                            </span>

                        </div>
                    </div>
                    <div className="  bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-semibold text-h5 text-secondary leading-6">Tailored Solutions</p>
                            <span className='text-gray-dark leading-8 text-6'>Every business is unique, and so are our financing options. We work closely with you to design a plan that aligns with your goals.</span>

                        </div>
                    </div>
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-semibold text-h5 text-secondary leading-6">Trusted Partnerships</p>
                            <span className='text-gray-dark leading-8 text-6'>Our collaborations with leading funding providers ensure that you receive the most reliable and competitive financing options.</span>
                        </div>
                    </div>
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-semibold text-h5 text-secondary leading-6">Transparent Terms</p>
                            <span className='text-gray-dark leading-8 text-6'>No hidden fees, no surprises. We prioritize clarity and honesty in all our funding agreements.
                            </span>
                        </div>
                    </div>
                </div>
                <p className='text-center text-justify'>Explore how Rose Jade offers reliable financial support and comprehensive solutions to help your business thrive. Apply for business funding today and take your success to the next level!</p>
            </div>
        </div>
    </>
  )
}
