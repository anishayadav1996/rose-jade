import React from 'react'

export default function Insights() {
    return (
        <>
            <div className='conatiner mx-auto px-16 text-gray-dark py-5 bg-white mt-5'>
                <div className='text-center'>
                    <h2 className="capitalize text-h2 font-bold text-primary mb-7 leading-[50px]">insights and advice<br />for financial sucess</h2>
                    <p className='text-h5 w-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Mollitia enim quam cumque reprehenderit ullam! Maiores aspernatur officia </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-5 py-5 px-16 gap-8">
                    <div className="max-w-sm  bg-white">
                        <div className="relative">
                            <img className="w-full rounded-lg" src="src/assets/img/download.jpg" alt="Sunset in the mountains" />
                            <div className='absolute top:0 left:0 bottom-[90%]'><button className='bg-primary text-white rounded-full w-20'>Insights</button></div>
                        </div>
                        <div className="py-4">
                            <span className=''>5 Dec</span>
                            <p className="text-gray-dark text-h4 leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm  bg-white">
                        <div className="relative">
                            <img className="w-full rounded-lg" src="src/assets/img/download.jpg" alt="Sunset in the mountains" />
                            <div className='absolute top:0 left:0 bottom-[90%]'><button className='bg-primary text-white rounded-full w-20'>Insights</button></div>
                        </div>
                        <div className="py-4">
                            <span className=''>5 Dec</span>
                            <p className="text-gray-dark text-h4 leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white">
                        <div className="relative">
                            <img className="w-full rounded-lg" src="src/assets/img/download.jpg" alt="Sunset in the mountains" />
                            <div className='absolute top:0 left:0 bottom-[90%]'><button className='bg-primary text-white rounded-full w-20'>Insights</button></div>
                        </div>
                        <div className="py-4">
                            <span className=''>5 Dec</span>
                            <p className="text-gray-dark text-h4 leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white">
                        <div className="relative">
                            <img className="w-full rounded-lg" src="src/assets/img/download.jpg" alt="Sunset in the mountains" />
                            <div className='absolute top:0 left:0 bottom-[90%]'><button className='bg-primary text-white rounded-full w-20'>Insights</button></div>
                        </div>
                        <div className="py-4">
                            <span className=''>5 Dec</span>
                            <p className="text-gray-dark text-h4 leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
