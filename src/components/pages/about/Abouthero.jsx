import React from 'react'

export default function Abouthero() {
  return (
    <>
        <div className='text-white bg-secondary'>
           <div className="container sm:px-6 px-16 mx-auto py-2">
                <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-10 md:gap-8">
                    <div className=" flex items-center">
                        <div className=''>
                          <p className='text-h1 leading-[64px] font-bold'>Welcome to Rose Jade </p>
                            <p className='mb-6 leading-8 text-h5 text-justify pt-6'>At Rose Jade Inc., we believe that every small business has the potential to make a big impact. Our mission is to empower entrepreneurs and small business owners with the tools, strategies, and support they need to thrive in today’s competitive landscape.</p>
                        </div>
                    </div>
                    <div className="ml-auto"><img className = "rounded-lg w-full h-full md:w-full" src=" src/assets/img/3-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
