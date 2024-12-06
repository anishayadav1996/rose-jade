import React from 'react'

export default function Clients() {
    return (
        <>
            <div className='conatiner mx-auto px-16 py-5 bg-secondary mt-10 text-white'>
                <div className='text-center'>
                    <h2 className="capitalize text-h2 font-bold text-primary mb-7 leading-[50px]">words of trust testimonials<br />from Satisfied clients</h2>
                    <p className='text-h5 w-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Mollitia enim quam cumque reprehenderit ullam! Maiores aspernatur officia </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-5 text-center py-5 px-16 gap-4 ">
                    <div className="max-w-sm py-20 rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="w-40 mx-auto rounded-full" src="src/assets/img/3-1.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <p className="text-gray-dark text-h4 leading-6">Kyle Windler</p>
                        <span className='text-gray-dark leading-8'>Internal Data Facilitator</span>
                            <p className="text-gray-dark pt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg py-20 overflow-hidden shadow-lg bg-white">
                        <img className="w-40 mx-auto  rounded-full" src="src/assets/img/3-1.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                        <p className="text-gray-dark text-h4 leading-6">Kyle Windler</p>
                        <span className='text-gray-dark leading-8'>Internal Data Facilitator</span>
                            <p className="text-gray-dark pt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm py-20 rounded-lg overflow-hidden shadow-lg bg-white">
                        <img className="w-40 mx-auto rounded-full" src="src/assets/img/3-1.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                        <p className="text-gray-dark text-h4 leading-6">Kyle Windler</p>
                        <span className='text-gray-dark leading-8'>Internal Data Facilitator</span>
                            <p className=" text-gray-dark pt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
