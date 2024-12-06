import React from 'react'

function About() {
  return (
    <>
        <div className="container px-16 mx-auto">
        <h2 className="capitalize text-h2 font-bold text-primary  mb-5 leading-[50px]">everything you need to know <br/>about Rose Jade Inc.</h2>
        <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 ">
          <div className="flex flex-col space-y-5">
            <p className='leading-6'>At Rose Jade, we’re more than just a financial consulting service – we’re your trusted partner in business growth and financial stability. Dedicated to empowering small business owners, our focus is on providing tailored financing solutions that help you seize new opportunities, overcome challenges, and achieve long-term success.</p>
            <p className='leading-6'> With a community-first approach, Rose Jade offers a range of financing options, including Merchant Cash Advances, Lines of Credit, and Equipment Financing, to meet your unique business needs. Backed by our reliable funding partners, Prosperum Capital and Arsenal Funding, we work exclusively with small businesses ready to grow.</p>
            <p className='leading-6'>Our mission is clear: to build a supportive network where small business owners can thrive, connecting you with the resources and support you need to succeed. With a straightforward, customer-first philosophy, we’re here to provide the guidance and tools necessary for businesses with 500+ credit scores and at least six months in operation.</p>
            <p className='leading-6'>Let Rose Jade be your go-to partner for growth and opportunity.</p>
          </div>
          <div className="ml-auto"><img className = "rounded-lg w-auto h-[400px]" src=" src/assets/img/about.jpg" alt="right-img" /></div>
        </div>
      </div>
    </>
  )
}

export default About
