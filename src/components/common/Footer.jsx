import React from 'react';
import { Link } from "react-router-dom";

export default function footer() {
    return (
        <>
            <div className="relative bottom-0 bg-brown">
                <footer className="container xl:px-16 mx-auto">
                    <div className=" mx-auto px-16  py-24">
                        <div className="grid grid-cols-2 gap-12 text-white">
                            <div className="mb-6 md:mb-0">
                                <Link to="/" className="flex items-center">
                                    <img src="src/assets/img/Web_Logo_BW Logo_Web Logo BW.png" className="h-14 me-4" alt="rose-jade-footer Logo" />
                                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Rose Jade</span> */}
                                </Link>
                                <p className='py-5 text-h5 text-justify'>At Rosejade, we are committed to empowering small businesses with innovative funding solutions like Merchant Cash Advances (MCA) and tailored financial strategies. Your success is our mission.</p>
                            </div>
                            <div class="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                                <div>  <h2 className="mb-6 text-sm font-semibold  uppercase ">Quick Links</h2>
                                    <ul className="font-medium">
                                        <li className="mb-4">
                                            <Link href="/" className="hover:text-secondary ">Home</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/about" className="hover:text-secondary ">About Us</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/contact" className="hover:text-secondary ">Contact Us</Link>
                                        </li>
                                    </ul></div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold  uppercase ">Services</h2>
                                    <ul className=" font-medium">
                                        <li className="mb-4">
                                            <Link to="/" className="hover:text-secondary ">Service 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="hover:text-secondary ">Service 2</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold  uppercase ">Legal & Compliance</h2>
                                    <ul className=" font-medium">
                                        <li className="mb-4">
                                            <Link to="/privacy-policy" className="hover:text-secondary ">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-conditions" className="hover:text-secondary ">Terms &amp; Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </footer>
                <div className='absolute bottom-[85%] left-[13%] right-[13%] '>
                    <div className=" rounded lg:flex items-center gap-4 bg-primary text-white px-6 py-4  ">
                        <div><h1 className='capitalize font-bold sm:text-h2 md:text-h3 lg:text-h2 xl:leading-[60px] sm:text-5 sm:leading-[60px] md:py-16'>Contact Us for a customized financial plan</h1></div>
                        <div className='py-10 '>
                            <p className='lg:text-h5 lg:leading-8 sm:leading:4 md:leading-2 sm:text-h6'>Be the first to know about the latest financial trends, exclusive funding opportunities, and expert tips to grow your business. Whether you’re looking for insights on Merchant Cash Advances (MCA) or personalized funding strategies, our updates will keep you informed and empowered.</p>
                            <form className="max-w-lg py-3">
                                <div className="flex my-2 relative ">
                                    <input className=" block lg:w-full  mb:w-30 sm:w-[80%] sm:text-h5 border placeholder:text-h6 md:placeholder:text-h5  border-white rounded-full h-10 px-4" type="text" placeholder="Your Email Address..." />
                                    <input className="bg-secondary absolute lg:right-0 lg:h-10 bottom-0 top-0  sm:right-20 sm:h-10 0 rounded-full lg:w-40 sm:w-30 " type="submit" Value='subscription' />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
