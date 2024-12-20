import React from 'react'

export default function Getstarted() {
    return (
        <>
            <div className="xl:container lg:px-16  mx-auto py-20 px-6">
                <div className="mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-12 ">
                    <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
                    <div className="flex flex-col space-y-5 px-6">
                        <h2 className='capitalize sm:text-h2 font-semibold text-primary text-h4 mb-3 lg:leading-[40px] leading-[50px]'>Get started with Rose Jade
                        </h2>
                        <p className='text-justify pt-2 leading-6'>Ready to take your business to the next level? At Rose Jade, we make the process simple and transparent. Whether you’re looking for immediate funding through our Merchant Cash Advance, a flexible Line of Credit, or essential Equipment Financing, we’re here to help.</p>
                        <p className='text-justify pt-2 leading-6'>Our experts will guide you every step of the way, ensuring that you get the right solution for your needs. Just a few quick details about your business, and you’re on your way to accessing the funds that empower growth. Let’s build your success story together.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
