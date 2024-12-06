import React from 'react'

function Hero() {
    return (
        <>
        <div className='text-white py-5 bg-secondary'>
            <div className="container mx-auto px-16">
                <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  my-10 ">
                    <div className="py-5 flex items-center">
                        <div>
                            <h1 className="capitalize text-h1 font-bold leading-[62px] mb-6 sm:text-h4">we build your future business</h1>
                            <p className='mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nam sit similique error placeat nemo amet maxime impedit odio vitae. Architecto quae perferendis suscipit? Hic vel sapiente voluptatibus placeat eum!</p>
                            <div class="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-white text-gray-dark rounded-lg px-4 py-6">15+ <br />Year Experience</div>
                                <div className='bg-white text-gray-dark rounded-lg px-4 py-6 '>75% <br /> Growth Rate</div>
                                <div className='bg-white text-gray-dark rounded-lg px-4 py-6' >120 <br /> Active Currently</div>
                            </div>
                            <div><button className=" bg-white  text-gray-dark rounded-full mt-5 w-40 h-10">Get Stated</button></div>
                        </div>
                    </div>
                    <div className="ml-auto"><img className = "rounded-lg w-auto h-[400px]" src=" src/assets/img/3-1.jpg" alt="right-img" /></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero
