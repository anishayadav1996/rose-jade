import React from 'react'

export default function Joinourteam() {
    return (
        <div className=''>
            <div className="container px-16 mx-auto py-20">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 rounded-lg overflow-hidden shadow-lg px-4">
                    <div className=''>
                        <h1 className='capitalize text-h2 sm:text-h6 md:text-h5 lg:text-h2 xl:leading-[60px] sm:text-5 sm:leading-[60px] pb-4 font-bold'>Join Our Network</h1>
                        <p className='lg:text-h5 lg:leading-8 sm:leading:4 md:leading-2 sm:text-h6 text-center'>At Rose Jade, we believe in the power of connection, creativity, and community. Joining our network isn’t just about signing up—it’s about becoming part of a movement that values individuality, innovation, and shared growth.</p>
                    </div>
                    <div className='lg:py-24 lg:px-24 sm:px-16 sm:py-16'>
                        <button class=" bg-primary hover:bg-secondary  px-16 py-2 rounded-full cursor-pointer text-white transition-all duration-500">
                            Get Started
                        </button>
                     
                    </div>

                </div>
            </div>
        </div>
    )
}
