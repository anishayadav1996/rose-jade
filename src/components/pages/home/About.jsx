import React from 'react'

function About() {
  return (
    <>
      <div className="xl:container lg:px-16  mx-auto py-20 px-6">
        <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-12 ">
          <div className="flex flex-col space-y-5 px-6">
          <h2 className="capitalize sm:text-h2 font-bold  text-h3 text-primary mb-3 lg:leading-[55px] leading-[50px]">Everything you need to know about Rose Jade Inc.</h2>
            <ul>
              <li>
                <p className='text-justify text-5 pt-2 leading-6'>At Rose Jade, we’re more than just a financial consulting service – we’re your trusted partner in business growth and financial stability. Dedicated to empowering small business owners, our focus is on providing tailored financing solutions that help you seize new opportunities, overcome challenges, and achieve long-term success.</p>
              </li>
              <li>
                <p className='text-justify text-h5 pt-2 leading-6'>With a community-first approach, Rose Jade offers a range of financing options, including Merchant Cash Advances, Lines of Credit, and Equipment Financing, to meet your unique business needs. Backed by our reliable funding partners, Prosperum Capital and Arsenal Funding, we work exclusively with small businesses ready to grow.</p>
              </li>
              <li>
                <p className='text-justify text-h5 pt-2 leading-6'>Our mission is clear: to build a supportive network where small business owners can thrive, connecting you with the resources and support you need to succeed. With a straightforward, customer-first philosophy, we’re here to provide the guidance and tools necessary for businesses with 500+ credit scores and at least six months in operation.</p>
                <p className='text-justify text-h5 pt-2 leading-6'>Let Rose Jade be your go-to partner for growth and opportunity.</p>
              </li>
            </ul>
          </div>
          <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
        </div>
      </div>
    </>
  )
}

export default About
