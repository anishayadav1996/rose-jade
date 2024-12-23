import React from 'react'

export default function Features() {
  return (
    <>
      <div className=''>
        <div className="xl:container lg:px-16  mx-auto pt-5 px-6 ">
          <div className="mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-12 ">
            <div className="flex flex-col space-y-5 px-6">
              <h2 className="capitalize sm:text-h4 font-semibold text-primary text-h5 mb-3 lg:leading-[40px] leading-[50px]">
                Features of Equipment Financing
              </h2>
              <p className='text-justify text-h5'>Understanding how a line of credit functions is key to maximizing its benefits for your business. Here’s how it works:
              </p>
              <ul className="mb-20 list-disc leading-7">
                <li>

                  <span className="font-bold">
                    Flexible Financing Options:
                  </span>
                  Choose between leasing or purchasing equipment based on your business needs. Financing terms can be tailored, with customizable repayment schedules to suit your cash flow.

                </li>
                <li>
                  <span className="font-bold">
                    Quick Approval and Fast Funding:
                  </span>
                  Fast approval within 3-4 hours with a simplified application process. Access the funds you need quickly, ensuring minimal downtime for your business.
                </li>
                <li>
                  <span className="font-bold">Affordable Repayment Terms: </span>
                  Affordable Repayment Terms:
                  Fixed monthly payments ensure you can plan your budget effectively. Repayment terms range from 12 to 60 months, providing flexibility for your business’s financial situation.

                </li>
                <li>
                  <span className="font-bold">No Collateral Requirements:</span>
                  Equipment itself serves as collateral, eliminating the need for additional personal or business assets. This makes equipment financing a risk-free and accessible option, especially for small businesses.

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
    </>
  )
}
