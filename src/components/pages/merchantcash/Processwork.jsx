import React from 'react'
import Btn from '../../common/Btn';

export default function Processwork() {
  return (
    <>
      <div div className=' bg-secondary'>
            <div className='xl:container mx-auto px-6 lg:px-16 text-gray-dark py-5'>
                <div className='text-center  text-white'>
                    <h2 className="capitalize text-h2 mb-7  font-bold">
                    How the Merchant Cash Advance Process Works
                    </h2>
                    <p className=' text-h5 '>Securing funding through a Merchant Cash Advance at Rose Jade Inc. is designed to be quick and straightforward. Here’s how it works:
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 text-justify py-5 sm:px-6">
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-semibold text-h5 text-primary leading-6">Submit Your Application</p>
                            <span className='text-gray-dark leading-8 text-6'>Provide basic business details and financial information through our simple online form.
                            </span>

                        </div>
                    </div>
                    <div className="  bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-semibold text-h5 text-primary leading-6">Quick Approval</p>
                            <span className='text-gray-dark leading-8 text-6'>Get approved within 3-4 hours after our team reviews your application.
                            </span>

                        </div>
                    </div>
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-semibold text-h5 text-primary leading-6">Receive Your Funds</p>
                            <span className='text-gray-dark leading-8 text-6'>Access a lump-sum advance customized to your business’s cash flow needs.
                            </span>
                        </div>
                    </div>
                    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <p className="font-semibold text-h5 text-primary leading-6">Repayment Made Simple</p>
                            <span className='text-gray-dark leading-8 text-6'>Repay the advance through a percentage of your future sales, ensuring manageable payments aligned with your revenue
                            </span>
                        </div>
                    </div>
                    <Btn value={'Apply Now'} txtcolor={'white'} urllink={'/contact-us'}/>
                </div>
            </div>
        </div>
    </>
  )
}
