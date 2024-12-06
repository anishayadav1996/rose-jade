import React from 'react'

export default function Insights() {
    return (
        <>
            <div className='container mx-auto xl:px-16 py-5 bg-white mt-5 lg:mb-96 sm:mb-16'>
                <div className='text-center'>
                <h2 className="capitalize text-h2 mb-7  ">
                insights and advice <br />
                        <p className='font-bold text-primary text-h1 leading-[60px]'>for financial sucess</p>
                    </h2>
                    {/* <p className='text-h5 w-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Mollitia enim quam cumque reprehenderit ullam! Maiores aspernatur officia </p> */}
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-5 py-5 px-16 gap-4">
                    <div className="max-w-sm  bg-white">
                        <div className="relative">
                            <img className="w-full rounded-lg" src="src/assets/img/download.jpg" alt="Sunset in the mountains" />
                            <div className='absolute top:0 left:0 bottom-[85%] px-3 '><button className='bg-primary text-white rounded-lg w-[100px] h-10'>Insights</button></div>
                        </div>
                        <div className="py-4">
                            <span className=''>5 Dec 2024</span>
                            <p className="text-gray-dark text-h4 leading-8">
                            Navigating the path to prosperity
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm  bg-white">
                        <div className="relative">
                            <img className="w-full rounded-lg" src="src/assets/img/download.jpg" alt="Sunset in the mountains" />
                            <div className='absolute top:0 left:0 bottom-[85%] px-3'><button className='bg-primary text-white rounded-lg w-[100px] h-10'>Insights</button></div>
                        </div>
                        <div className="py-4">
                            <span className=''>5 Decc 2024</span>
                            <p className="text-gray-dark text-h4 leading-8 ">
                            Navigating the path to prosperity
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white">
                        <div className="relative">
                            <img className="w-full rounded-lg" src="src/assets/img/download.jpg" alt="Sunset in the mountains" />
                            <div className='absolute top:0 left:0 bottom-[85%] px-3'><button className='bg-primary text-white rounded-lg w-[100px] h-10'>Insights</button></div>
                        </div>
                        <div className="py-4">
                            <span className=''>5 Dec 2024 </span>
                            <p className="text-gray-dark text-h4 leading-8">
                               Navigating the path to prosperity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
