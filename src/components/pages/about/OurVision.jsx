import React from 'react'

export default function OurVision() {
  return (
    <>
      <div className="xl:container lg:px-16  mx-auto py-10 px-6">
        <div className="mx-auto grid md:grid-cols-2 grid-cols-1 gap-12 ">
          <div className="flex flex-col space-y-5 px-6"> 
          <p className='text-h3 text-justify text-secondary'>Our Vision</p>
                {/* <p className='text-secondary text-h4 font-bold'>Mission</p> */}
                <p className='text-justify pt-2 leading-6'>We envision a thriving network of small businesses supported by reliable business funding resources, expert guidance, and a commitment to customer success. Our goal is to be the go-to partner for small business funding, providing flexible financing options that meet the unique needs of startups, growing enterprises, and established businesses.
                </p>
                <p className='text-justify pt-2 leading-6'>By offering services such as Affordable Merchant Cash Advance services, Flexible Lines of Credit for small businesses, and quick capital solutions, we strive to empower businesses to Grow and succeed in today’s competitive market. Whether it’s startup funding or short-term funding for immediate needs, Rose Jade Inc. is dedicated to helping businesses thrive.

                </p>
          </div>
          <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
        </div>
      </div>
    </>
  )
}
