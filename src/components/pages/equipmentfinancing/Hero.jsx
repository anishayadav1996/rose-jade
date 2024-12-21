import React from 'react'

export default function Hero() {
  return (
    <>
       <div className='text-white bg-secondary sm:px-6 py-20 px-6 mx-auto'>
               <div className="xl:container   lg:px-16 mx-auto">
               <div className="mx-auto grid xl:grid-cols-2 grid-cols-1 gap-4 xl:gap-2">
                    <div className=" flex items-center">
                        <div className=''>
                          <p className='sm:text-h1 leading-[64px] font-bold text-h2'>Fuel Your Business Growth with Equipment Financing at Rose Jade Inc.</p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>At Rose Jade Inc., we recognize the critical role that quality equipment plays in driving your business forward. Whether you're aiming to replace outdated machinery, acquire specialized tools, or invest in the latest technology, our Equipment Financing solutions offer the flexibility you need. We provide tailored financing options that enable you to make the necessary upgrades while preserving your working capital and maintaining healthy cash flow.</p>
                        </div>
                    </div>
                    <div className="px-6"><img className = "rounded-lg w-full h-full  md:w-full" src=" src/assets/img/about-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
