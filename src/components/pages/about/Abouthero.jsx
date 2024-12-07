import React from 'react'

export default function Abouthero() {
  return (
    <>
        <div className='text-white py-5 bg-secondary'>
            <div className="container mx-auto px-16">
                <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-10 md:gap-8">
                    <div className="py-5 flex items-center">
                        <div className=''>
                          <p className='text-h1 leading-[64px]'>Welcome to Rose Jade </p>
                            <p className='mb-6 leading-8 text-h5 text-justify'>At Rose Jade Inc., we believe that every small business has the potential to make a big impact. Our mission is to empower entrepreneurs and small business owners with the tools, strategies, and support they need to thrive in today’s competitive landscape.</p>
                        </div>
                    </div>
                    <div className="ml-auto"><img className = "rounded-lg w-auto h-[400px] md:w-full" src=" src/assets/img/3-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
