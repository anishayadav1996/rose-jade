import React from 'react'

export default function Mission() {
    return (
        <>
    <div className="xl:container lg:px-16  mx-auto py-10 px-6">
        <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12 ">
        <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
          <div className="flex flex-col space-y-5 px-6"> 
          <h2 className="capitalize sm:text-h2 font-bold  text-h3 text-primary mb-3 lg:leading-[55px] leading-[50px]">Everything you Need to Know about Rose Jade Inc.</h2>
          <p className='text-h3 text-justify font-semibold text-primary'>Our Mission</p>
                {/* <p className='text-secondary text-h4 font-bold'>Mission</p> */}
                <p className='text-justify pt-1 text-h5 leading-6'>At Rose Jade Inc., our mission is to empower small business owners with tailored financing solutions that drive growth, stability, and long-term success. By providing accessible funding options like Merchant Cash Advances, Lines of Credit, and Equipment Financing, we aim to remove financial barriers and help businesses seize opportunities, overcome challenges, and thrive in competitive markets.</p>
          </div>
        </div>
      </div>
        </>
    )
}
