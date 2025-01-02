import React from 'react'
import Btn from '../../common/Btn';
// import { Link } from 'react-router-dom';
export default function Howtoapply() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className="xl:container lg:px-16  mx-auto py-20 px-6">
                {/* <div className="mx-auto grid md:grid-cols-2 grid-cols-1 gap-12 "> */}
                    {/* <div className="px-6">
                        <img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div> */}
                    <div className="text-center">
                        <h2 className='capitalize sm:text-h3 font-bold text-primary text-h4 mb-3 lg:leading-[40px] leading-[50px]'>How to Apply
                        </h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-5">
                            <div className='rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 px-6 py-8'>
                                <p className='text-secondary-light  mt-3 font-bold text-h5'>Apply
                                </p>
                                <p className='text-h6 text-center  leading-6 pt-2 pb-5'>Fill out a quick online application, and our Finance Team will contact you within minutes to review your funding needs.
                                </p>
                            </div>
                            <div className='rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 px-6 py-8'> 
                                <p className='text-secondary-light  mt-3 font-bold text-h5'>Get a decision
                            </p>
                                <p className='text-h5 text-center  leading-6 pt-2 pb-5'>We’ll evaluate your request and provide a funding recommendation within 4 hours.
                                </p></div>
                            <div className='rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 px-6 py-8'>
                                <p className='text-secondary-light  mt-3 font-bold text-h5'>Receive your funds
                                </p>
                                <p className='text-h5 text-center  leading-6 pt-2 pb-5'>Once approved, you’ll receive a lump sum payout within 3-4 hours. Use the funds at your discretion, as needed.
                                </p>
                            </div>
                        </div>
                        <div className='text-center pt-7'>
                            <Btn value={'Apply Now'} txtcolor={'primary'} textcolor={"white"} urllink={'/contact-us'} />
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}
