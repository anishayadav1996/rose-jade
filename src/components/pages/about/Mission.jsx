import React from 'react'

export default function Mission() {
    return (
        <>
            <div className="container px-16 mx-auto py-20">
                <h2 className="capitalize lg:text-h1 font-bold text-gray-dark  mb-5 leading-[50px] text-center">Our Mission And Value </h2>
                <p className=''>To inspire and empower small businesses to achieve their dreams by providing innovative solutions, personalized support, and a steadfast commitment to their growth and success.</p>
                <div class="grid grid-cols-3 xl:gap-4 lg:gap-8 text-center py-5">
                    <div className="bg-primary text-white rounded-lg px-4 py-10 ">15+ <br />Year Experience</div>
                    <div className='bg-primary text-white rounded-lg px-4 py-10 '>75% <br /> Growth Rate</div>
                    <div className='bg-primary text-white rounded-lg px-4 py-10 ' >120 <br /> Active Currently</div>
                </div>
            </div>
        </>
    )
}
