import React from 'react'

export default function Rightsforbusiness() {
  return (
    <div className=''>
      <div className="xl:container lg:px-16  mx-auto pt-5 px-6 ">
        <div className="mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-12 ">
          <div className="flex flex-col space-y-5 px-6">
            <h2 className="capitalize sm:text-h4 font-semibold text-primary text-h5 mb-3 lg:leading-[40px] leading-[50px]">
            Is a Merchant Cash Advance Right for Your Business?
            </h2>
            <p className='text-justify text-h5'>A Merchant Cash Advance is an excellent choice for businesses that require fast and flexible funding. Here are a few indicators that MCA might be the perfect solution for you:</p>
            <ul className="mb-20 list-disc">
              <li>
                <span>You need </span>
                <span className="font-bold">
                fast access to capital
                </span>
          for immediate needs, such as inventory purchases, payroll, or emergency expenses.
            
              </li>
              <li>
              Your business experiences 
                <span className="font-bold">
                fluctuating sales 
                </span>
                and would benefit from a repayment structure tied to your revenue.
              </li>
              <li>
                <span className="font-bold">Expert guidance and support: </span>
                at every step, helping you make informed decisions.
              </li>
              <li>
              You lack collateral to secure traditional loans but still require financing to support your operations.

              </li>
              <li>
              You prefer funding that doesn’t involve personal credit checks or require perfect credit scores.

              </li>
            </ul>
          </div>
          <div className="px-6">
            <img
              className="rounded-lg w-auto h-full  md:w-full object-cover object-top"
              src=" src/assets/img/about-home.jpg"
              alt="about-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
