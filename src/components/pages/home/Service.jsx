import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return (
        <div className='bg-secondary'>
             <div className="xl:container px-6 lg:px-16 mx-auto py-20 ">
                <div className='text-center'>
                    <h2 className="capitalize text-h2 text-white">
                        our services for <br />
                        <p className='font-bold text-primary text-h1 leading-[60px]'>financial success</p>
                    </h2>
                   
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-5 text-center py-5 sm:px-6">
                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light  mt-3 font-bold'>Merchant Cash Advance</h2>
                            <p className=" text-h6 text-center  leading-6 pt-2">
                            Quick funding to fuel your business growth.
                            </p>
                            <Link to="" className='text-h5 font-semibold text-justify mt-5'>Read More</Link><i className="fa fa-arrow-right px-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="far fa-credit-card text-primary text-h1"></i>
                            <h2 className='text-secondary-light mt-3 font-bold'>Line of Credit</h2>
                            <p className=" text-h6 text-center y leading-6 pt-2">
                            Flexible financing for every business need. 
                            </p>
                            <Link to="" className='text-h5 font-semibold text-justify mt-5'>Read More</Link><i className="fa fa-arrow-right px-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="fas fa-book text-primary text-h1"></i>
                            <h2 className='text-secondary-light mt-3 font-bold'>Business Equipment Financing</h2>
                            <p className=" text-h6 text-center leading-6 pt-2">
                            Get the tools to power your business growth.
                            </p>
                            <Link to="" className='text-h5 font-semibold text-justify mt-5'>Read More</Link><i className="fa fa-arrow-right px-3" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                {/* <div className='text-center'>
                    <Link  to ="/service" onClick={scrollToTop} className=" bg-white bg-transparent  text-gray-dark rounded-full mt-5 py-2 px-4  hover:bg-primary hover:text-white transition-all duration-500">
                        View More
                    </Link>
                </div> */}
            </div>
        </div>
    )
}
