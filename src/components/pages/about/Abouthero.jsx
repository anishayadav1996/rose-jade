import React from 'react'

export default function Abouthero() {
  return (
    <>
    
        <div className='text-white bg-secondary sm:px-6 py-20 px-6 mx-auto'>
               <div className="xl:container   lg:px-16 mx-auto">
               <div className="mx-auto grid xl:grid-cols-2 grid-cols-1 gap-4 xl:gap-2">
                    <div className=" flex items-center">
                        <div className=''>
                          <p className='sm:text-h1 leading-[64px] font-bold text-h2'>Welcome to Rose Jade </p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>At Rose Jade Inc., we believe that every small business has the potential to make a big impact. Our mission is to empower entrepreneurs and small business owners with the tools, strategies, and support they need to thrive in today’s competitive landscape.</p>
                        </div>
                    </div>
                    <div className="px-6"><img className = "rounded-lg w-full h-full  md:w-full" src=" src/assets/img/about-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
