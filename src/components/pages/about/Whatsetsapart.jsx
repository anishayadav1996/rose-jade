import React from 'react'

export default function Whatsetsapart() {
  return (
    <>
       <div div className=' bg-white'>
            <div className='xl:container mx-auto px-6 lg:px-16 text-gray-dark py-5'>
                <div className='text-center  '>
                    <h2 className="capitalize text-h2 mb-7 text-primary font-bold">
                    What Sets Us Apart? 
                    </h2>
                    <p className=' text-h5 text-center'>At Rose Jade Inc., we don’t believe in a one-size-fits-all approach. Here’s what makes us different:</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 text-justify py-5 sm:px-6">
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-bold text-h5 text-secondary-light leading-6 text-center">Fast and Hassle-Free Funding</p>
                            <span className=' leading-8 text-h5 text-justify'>We understand the urgency of business needs, which is why our funding process is quick and straightforward.
                            </span>

                        </div>
                    </div>
                    <div className="  bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-bold text-h5 text-secondary-light leading-6 text-center">Tailored Solutions</p>
                            <span className='leading-8 text-h5 text-justify'>Every business is unique, and so are our financing options. We work closely with you to design a plan that aligns with your goals.</span>

                        </div>
                    </div>
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-bold text-h5 text-secondary-light leading-6 text-center">Trusted Partnerships</p>
                            <span className='leading-8 text-h5 text-justify'>Our collaborations with leading funding providers ensure that you receive the most reliable and competitive financing options.</span>
                        </div>
                    </div>
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-bold text-h5 text-secondary-light leading-6 text-center">Transparent Terms</p>
                            <span className='leading-8 text-h5 text-justify'>No hidden fees, no surprises. We prioritize clarity and honesty in all our funding agreements.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
