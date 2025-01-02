import React from 'react'

export default function Whychoose() {
  return (
    <>
       <div className=' sm:px-6 py-20 px-6 mx-auto'>
               <div className="xl:container   lg:px-16 mx-auto">
               <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4 xl:gap-2">
               <div className="px-6"><img className = "rounded-lg w-full h-full  md:w-full" src=" src/assets/img/about-1.jpg" alt="right-img" /></div>
                    <div className=" flex items-center">
                        <div className=''>
                          <p className='sm:text-h2 leading-[64px] font-bold text-h3 text-primary'>Why Choose a Line of Credit?
                          </p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>A business line of credit gives you the flexibility to access funds at any time, without needing to apply for a loan each time. It provides you with a revolving credit limit, meaning you can borrow, repay, and borrow again as needed. This makes it an excellent option for businesses that need flexible, short-term funding for various purposes, including inventory purchases, emergency expenses, and business expansion.
                            </p>
                           
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </>
  )
}
