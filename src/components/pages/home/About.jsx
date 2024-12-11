import React from 'react'

function About() {
  return (
    <>
      <div className="xl:container lg:px-16  mx-auto py-20 px-6">
        <div className="mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-12 ">
          <div className="flex flex-col space-y-5 px-6">
          <h2 className="capitalize sm:text-h2 font-bold text-primary text-h3 mb-3 lg:leading-[40px] leading-[50px]">everything you need to know <br />about Rose Jade Inc.</h2>
            <ul>
              <li>
                <p className='text-secondary text-h4 font-bold'>Mission</p>
                <p className='text-justify pt-2'>At Rose Jade Inc., we are committed to empowering small businesses by providing them with the financial tools they need to thrive. Our mission is to make funding accessible, transparent, and stress-free.</p>
              </li>
              <li>
                <p className='text-secondary text-h4 font-bold pt-2'>Vision</p>
                <p className='text-justify pt-2'>To be the most trusted financial partner for small businesses, offering innovative solutions that simplify growth and drive success.</p>
              </li>
              <li>
                <p className='text-secondary text-h4 font-bold pt-2'>Our Story</p>
                <p className='text-justify pt-2'>TFounded by a passionate team of financial experts and business enthusiasts, Rose Jade Inc. understands the challenges small business owners face when it comes to securing funding. With years of experience in the industry, we’ve dedicated ourselves to providing easy-to-understand funding options that can make a real impact on your business.</p>
              </li>
            </ul>
          </div>
          <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full" src=" src/assets/img/about-home.jpg" alt="right-img" /></div>
        </div>
      </div>
    </>
  )
}

export default About
