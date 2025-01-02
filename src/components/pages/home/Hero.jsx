import React from 'react'
// import { Link } from 'react-router-dom';
import Btn from '../../common/Btn';

function Hero() {
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // };
    return (
        <>
            <div className='relative py-5 bg-cover bg-center bg-no-repeat' 
                style={{ backgroundImage: "url('src/assets/img/bg.jpg')" }} >
                    <div className="absolute inset-0 bg-white opacity-90"></div>
                <div className="xl:container relative  px-6 lg:px-16 mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 sm:grid-cols-1 sm:my-5 sm:py-5 md:gap-12 gap-12">
                        <div className="py-2 flex items-center">
                            <div className='px-6'>
                                <h1 className="capitalize xl:text-h2 mb-7 md:text-h3 lg:text-h3 text-h5 leading-8">
                                    <p className=' lg:leading-[70px] md:leading-[50px] text-primary'>Empowering Your Business with Fast, Flexible Financing.</p>
                                    <p className='text-secondary font-bold lg:leading-[65px] leading-15 md:leading-[40px]'>Unlock growth opportunities with fast and flexible business funding options tailored to your needs.</p>
                                </h1>
                                <p className='mb-6 leading-8 text-h5 text-justify '>At Rose Jade Inc, we specialize in Merchant Cash Advances (MCA), Line of Credit, and Equipment Financing, empowering small businesses to streamline operations and boost revenue. Our hassle-free solutions offer quick access to funds, ensuring you can seize new opportunities and achieve sustainable growth.</p>
                                {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-5 text-center py-5 ">
                                    <div className="bg-white text-gray-dark rounded-lg px-4 py-6">15+ <br />Year Experience</div>
                                    <div className='bg-white text-gray-dark rounded-lg px-4 py-6 '>75% <br /> Growth Rate</div>
                                    <div className='bg-white text-gray-dark rounded-lg px-4 py-6' >120 <br /> Active Currently</div>
                                </div> */}
                                <div>
                                   <Btn value={'Get Started'} txtcolor={'white'} textcolor ={"gray-dark"} urllink={'contact-us'}/>
                                </div>
                            </div>
                        </div>
                        <div className="px-6"><img className="rounded-lg w-full h-full md:w-full object-cover" src=" src/assets/img/hero.png" alt="hero-img" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
