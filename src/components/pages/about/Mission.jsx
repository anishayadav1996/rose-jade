import React from 'react'

export default function Mission() {
    return (
        <>
             <div className="xl:container px-6 lg:px-16 mx-auto">
                <h2 className="capitalize lg:text-h1 font-bold text-gray-dark  mb-5 leading-[50px] text-center text-h3">Our Mission And Value </h2>
                <p className='px-6'>To inspire and empower small businesses to achieve their dreams by providing innovative solutions, personalized support, and a steadfast commitment to their growth and success.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-5 text-center py-5 ">
                    <div className="bg-primary text-white rounded-lg px-4 py-10 ">15+ <br />Year Experience</div>
                    <div className='bg-primary text-white rounded-lg px-4 py-10 '>75% <br /> Growth Rate</div>
                    <div className='bg-primary text-white rounded-lg px-4 py-10 ' >120 <br /> Active Currently</div>
                </div>
            </div>
        </>
    )
}
