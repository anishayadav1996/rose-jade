import React from 'react'

export default function Abouthero() {
  return (
    <>
    
        <div className='text-white bg-secondary sm:px-6 py-20 px-6 mx-auto'>
               <div className="xl:container   lg:px-16 mx-auto">
               <div className="mx-auto grid xl:grid-cols-2 grid-cols-1 gap-4 xl:gap-2">
                    <div className=" flex items-center">
                        <div className=''>
                          <p className='sm:text-h1 leading-[64px] font-bold text-h2'>Welcome to the Rose Jade Inc.</p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>Ready to take your business to the next level? At Rose Jade, we make the process simple and transparent. Whether you’re looking for immediate funding through our Merchant Cash Advance, a flexible Line of Credit, or essential Equipment Financing, we’re here to help.</p>
                        </div>
                    </div>
                    <div className="px-6"><img className = "rounded-lg w-full h-full  md:w-full" src=" src/assets/img/about-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
