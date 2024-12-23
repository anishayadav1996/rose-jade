import React from 'react'

export default function Hero() {
  return (
    <>
       <div className='text-white bg-secondary sm:px-6 py-20 px-6 mx-auto'>
               <div className="xl:container   lg:px-16 mx-auto">
               <div className="mx-auto grid xl:grid-cols-2 grid-cols-1 gap-4 xl:gap-2">
                    <div className=" flex items-center">
                        <div className=''>
                          <p className='sm:text-h1 leading-[64px] font-bold text-h2'>Fuel Your Business Growth with a Line of Credit at Rose Jade Inc.
                          </p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>At Rose Jade Inc., we understand that managing cash flow is vital to running a successful business. Whether you're facing seasonal fluctuations, unexpected expenses, or looking to seize new opportunities, our Line of Credit solutions offer the flexibility and financial security</p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>you need. With a revolving line of credit, you only borrow what you need and repay it on your terms, ensuring you have access to funds whenever your business requires them.
                            </p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>We provide tailored credit options that give you the freedom to manage your working capital effectively while maintaining financial stability and fueling growth.
                            </p>
                        </div>
                    </div>
                    <div className="px-6"><img className = "rounded-lg w-full h-full  md:w-full" src=" src/assets/img/about-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
