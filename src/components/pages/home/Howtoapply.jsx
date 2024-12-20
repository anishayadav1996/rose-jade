import React from 'react'
import { Link } from 'react-router-dom';
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
                <div className="mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-12 ">
                    <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
                    <div className="flex flex-col space-y-3 px-6">
                        <h2 className='capitalize sm:text-h2 font-semibold text-primary text-h4 mb-3 lg:leading-[40px] leading-[50px]'>How to Apply 
                        </h2>
                        <p className='text-justify  leading-6'>Explore how Rose Jade offers reliable financial support and comprehensive solutions to help your business thrive. Apply for business funding today and take your success to the next level!
                        </p>
                        <p className='text-justify leading-6 font-semibold'>1 Apply
                        </p>
                        <p className='text-justify  leading-6'>Fill out a quick online application, and our Finance Team will contact you within minutes to review your funding needs.
                        </p>
                        <p className='text-justify leading-6 font-semibold'>2 Get a decision
                        </p>
                        <p className='text-justify leading-6'>We’ll evaluate your request and provide a funding recommendation within 4 hours.
                        </p>
                        <p className='text-justify leading-6 font-semibold'>3 Receive your funds
                        </p>
                        <p className='text-justify  leading-6'>Once approved, you’ll receive a lump sum payout within 3-4 hours. Use the funds at your discretion, as needed.
                        </p>
                        <Link onClick={scrollToTop} to="contact-us" className=" bg-primary bg-transparent  text-white rounded-full mt-5 py-2 px-4 w-32 hover:bg-secondary hover:text-white transition-all duration-500">Apply Now</Link>
                    </div>
                </div>
            </div>
    </>
  )
}
