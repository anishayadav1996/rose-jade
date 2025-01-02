import React from 'react'

export default function Hero() {
  return (
    <>
       <div className='text-white bg-secondary sm:px-6 py-20 px-6 mx-auto'>
               <div className="xl:container   lg:px-16 mx-auto">
               <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4 xl:gap-2">
                    <div className=" flex items-center">
                        <div className=''>
                          <p className='sm:text-h1 leading-[64px] font-bold text-h2'>Fuel Your Business Growth with Business Cash Advance at Rose Jade Inc.</p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>At Rose Jade Inc., we understand the challenges small businesses face when managing cash flow or seeking immediate funding for growth. Our Merchant Cash Advance service offers a fast and flexible financing solution, enabling you to access working capital without the delays or strict requirements of traditional loans. Whether you’re expanding operations, covering expenses, or taking advantage of new opportunities, a Merchant Cash Advance is designed to meet your needs efficiently.</p>
                        </div>
                    </div>
                    <div className="px-6"><img className = "rounded-lg w-full h-full  md:w-full" src=" src/assets/img/about-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
