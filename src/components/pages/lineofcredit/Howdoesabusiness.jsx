import React from 'react'

export default function Howdoesabusiness() {
  return (
    <>
       <div className=''>
       <div className="xl:container lg:px-16  mx-auto pt-5 px-6 ">
        <div className="mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-12 ">
        <div className="px-6">
            <img
              className="rounded-lg w-auto h-full  md:w-full object-cover object-top"
              src=" src/assets/img/about-home.jpg"
              alt="about-img"
            />
          </div>
          <div className="flex flex-col space-y-5 px-6">
            <h2 className="capitalize sm:text-h4 font-semibold text-primary text-h5 mb-3 lg:leading-[40px] leading-[50px]">
            How Does a Business Line of Credit Work?
            </h2>
            <p className='text-justify text-h5'>Understanding how a line of credit functions is key to maximizing its benefits for your business. Here’s how it works:
            </p>
            <ul className="mb-20 list-disc leading-9">
              <li>
               
                <span className="font-bold">
                Pre-Approved Credit Limit:
                </span>
                After approval, you are given a set credit limit based on your business’s financial health and needs.
              </li>
              <li>
                <span className="font-bold">
                Draw Funds as Needed:
                </span>
                Borrow any amount up to the approved limit whenever required.
              </li>
              <li>
                <span className="font-bold">Flexible Repayment: </span>
                Repay funds at your convenience, with interest only charged on the borrowed amount.
              </li>
              <li>
              <span className="font-bold">Revolving Access:  </span>
              Once repaid, the credit becomes available again for future use.

              </li>
            </ul>
          </div>
       
        </div>
      </div>
    </div>
    </>
  )
}
