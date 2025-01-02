import React from 'react'
// import { Link } from "react-router-dom";
import Btn from '../../common/Btn';


export default function ApplicationProcess() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <div div className=' bg-secondary'>
    <div className='xl:container mx-auto px-6 lg:px-16 text-gray-dark py-5'>
        <div className='text-center  text-white'>
            <h2 className="capitalize text-h2 mb-7  font-bold">
            Equipment Financing Application Process
            </h2>
            {/* <p className=' text-h5 '>Securing funding through a Merchant Cash Advance at Rose Jade Inc. is designed to be quick and straightforward. Here’s how it works:
            </p> */}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 text-justify py-5 sm:px-6">
            <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <p className="font-bold text-h5 text-secondary-light text-center leading-6">Submit Your Application</p>
                    <span className='text-gray-dark leading-8 text-6'>Complete a simple online form with basic business details and equipment information.
                    </span>

                </div>
            </div>
            <div className="  bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <p className="font-semibold text-h5 text-center text-secondary-light leading-6">Quick Approval</p>
                    <span className='text-gray-dark leading-8 text-6'>Get a tailored financing decision within 3-4 hours based on your business needs.
                    </span>

                </div>
            </div>
            <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <p className="font-semibold text-h5 text-center text-secondary-light leading-6">Choose Your Terms</p>
                    <span className='text-gray-dark leading-8 text-6'>Select a flexible repayment plan that suits your cash flow, with terms from 12 to 60 months.
                    </span>
                </div>
            </div>
            <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <p className="font-semibold text-h5 text-center text-secondary-light leading-6">Acquire Your Equipment</p>
                    <span className='text-gray-dark leading-8 text-6'>Once approved, use the funds to purchase or lease the equipment you need to grow your business.
                    </span>
                </div>
            </div>
        </div>
        <div className='text-center'>
        <Btn value={'Apply Now'} txtcolor={'white'} urllink={'/contact-us'}/>
        </div>
      
    </div>
</div>
  )
}
