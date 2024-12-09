import React from 'react'

function About() {
  return (
    <>
      <div className="container px-16 mx-auto py-20">
        
        <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 ">
          <div className="flex flex-col space-y-5">
          <h2 className="capitalize lg:text-h2 font-bold text-primary  mb-3 leading-[50px]">everything you need to know <br />about Rose Jade Inc.</h2>
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
          <div className="ml-auto"><img className="rounded-lg w-auto h-[400px] " src=" src/assets/img/about.jpg" alt="right-img" /></div>
        </div>
      </div>
    </>
  )
}

export default About
