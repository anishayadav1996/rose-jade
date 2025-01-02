import React from 'react'

export default function Benifites() {
  return (
    <>
      <div className="xl:container lg:px-16  mx-auto py-20 px-6">
        <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-12 ">
          <div className="flex flex-col space-y-5 px-6">
          <h2 className="capitalize sm:text-h2 font-bold  text-h3 text-primary mb-3 lg:leading-[50px] leading-[50px]">Benefits of Choosing a Merchant Cash Advance at Rose Jade Inc.</h2>
          <p className='text-justify pt-2 leading-6'>When you work with Rose Jade Inc., you gain access to a range of benefits designed to support your business:</p>
          <ul className="mb-20 list-disc leading-7">
              <li>
                <span className="font-bold">
                Quick Access to Capital:
                </span>
                Receive funds in days, not weeks, to address immediate financial needs.
              </li>
              <li>
                <span className="font-bold">No Collateral Required: </span>
                Secure funding without risking valuable assets.
              </li>
              <li>
                <span className="font-bold">Flexible Repayment Terms: </span>
                Payments are tied to your sales, providing flexibility during slower months.
              </li>
              <li>
                <span className="font-bold">
                Minimal Paperwork: 
                </span>
                Our simple application process saves you time and effort.

              </li>
              <li>
                <span className="font-bold">
                Use Funds as You See Fit: 
                </span>
                Whether for payroll, inventory, or marketing, you decide how to allocate the funds.
              </li>
              <li>
                <span className="font-bold">
                Accessible for All Credit Profiles:  
                </span>
                Even businesses with low credit scores can qualify based on sales performance.
              </li>
            </ul>
          </div>
          <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
        </div>
      </div>
    </>
  )
}
