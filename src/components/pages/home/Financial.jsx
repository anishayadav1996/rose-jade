import React from 'react'

export default function Financial() {
    return (
        <div div className=' bg-white'>
            <div className='xl:container mx-auto px-6 lg:px-16 text-gray-dark py-5 mt-10'>
                <div className='text-center'>
                    <h2 className="capitalize text-h2 mb-7  ">
                        our Professional <br />
                        <p className='font-bold text-primary text-h1 leading-[60px]'>financial Team</p>
                    </h2>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 my-5 text-center py-5 ">
                    <div className=" bg-white">
                        <img class="w-full rounded-lg" src="src/assets/img/3.jpg" alt="developer" />
                        <div className="px-6 py-4">
                            <p className="text-gray-dark text-h4 leading-6">Usha Singh</p>
                            <span className='text-gray-dark leading-8 text-6'>Full Stack Web Developer</span>

                        </div>
                    </div>
                    <div className="  bg-white">
                        <img class="w-full rounded-lg" src="src/assets/img/19.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <p className="text-gray-dark text-h4 leading-6">Leeza Rai</p>
                            <span className='text-gray-dark leading-8 text-6'>Case Manager</span>

                        </div>
                    </div>
                    <div className=" bg-white">
                        <img class="w-full rounded-lg" src="src/assets/img/7.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <p className="text-gray-dark text-h4 leading-6">Raveena Tandon</p>
                            <span className='text-gray-dark leading-8 text-6'>Digital Marketing Intern</span>
                        </div>
                    </div>
                    <div className=" bg-white">
                        <img class="w-full  rounded-lg" src="src/assets/img/8.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <p className="text-gray-dark text-h4 leading-6">Janmejaya Singh Chauhan</p>
                            <span className='text-gray-dark leading-8 text-6'>Project Manager</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
