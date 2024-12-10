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
             <div className="xl:container px-6 lg:px-16 mx-auto py-20">
                <div className='text-center'>
                    <h2 className="capitalize text-h2 text-white">
                        our services for <br />
                        <p className='font-bold text-primary text-h1 leading-[60px]'>financial success</p>
                    </h2>
                   
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-5 text-center py-5 ">
                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="fas fa-money-check text-primary text-h1"></i>
                            <h2 className='text-secondary-light  mt-3 font-bold'>Business Cash Advance</h2>
                            <p className="text-gray-dark text-h6 text-justify">
                                When you need fast access to cash without the hassle of traditional loans, a Business Cash Advance from Rose Jade Inc. offers the flexibility you need to manage your cash flow. Repayments are tied to your daily sales, making it easy to pay back as you grow.
                            </p>
                        </div>
                    </div>
                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="far fa-credit-card text-primary text-h1"></i>
                            <h2 className='text-secondary-light mt-3 font-bold'>Line of Credit</h2>
                            <p className="text-gray-dark text-h6 text-justify">
                                A revolving line of credit can be a game-changer for your business. Get access to funds whenever you need them with a line of credit from Rose Jade Inc., helping you manage unexpected expenses and support growth initiatives.
                            </p>
                        </div>
                    </div>
                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-8">
                            <i className="fas fa-book text-primary text-h1"></i>
                            <h2 className='text-secondary-light mt-3 font-bold'>Business Equipment Financing</h2>
                            <p className="text-gray-dark text-h6 text-justify">
                                Whether you're purchasing new equipment or upgrading existing machinery, Rose Jade Inc. offers equipment financing options that allow you to acquire the tools you need without depleting your working capital.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Link  to ="/service" onClick={scrollToTop} className=" bg-white bg-transparent  text-gray-dark rounded-full mt-5 py-2 px-4  hover:bg-primary hover:text-white transition-all duration-500">
                        View More
                    </Link>
                </div>
            </div>
        </div>
    )
}
