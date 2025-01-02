import React from 'react'

export default function OurCommitment() {
  return (
    <>
      <div className="">
            <div className="xl:container px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[15rem] md:mb-[15rem] mb-[20rem] pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white">
                    <div className="p-6 lg:p-12">
                        <h1 className=" sm:text-h3 lg:text-h3 font-bold mb-4 text-h4">
                        Our Commitment to You
                        </h1>
                        <p className=" text-justify text-h5">
                        At Rose Jade Inc., we are dedicated to helping businesses grow. Whether you’re expanding operations, investing in new equipment, or managing cash flow challenges, we’re here to provide the financial support you need.
                        </p>
                    </div>
                    <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
