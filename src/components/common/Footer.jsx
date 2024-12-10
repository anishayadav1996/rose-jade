import React from 'react';
import { Link } from "react-router-dom";

export default function footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className="relative bottom-0 bg-brown">
                <footer className="xl:container lg:px-16 mx-auto px-6 ">
                    <div className=" mx-auto px-16  pt-12 bottom-0">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-10 lg:gap-12 md:lg-5  gap-1 my-5  py-5 text-white">
                            <div className="mb-6 md:mb-0 mt-6">
                                <Link to="/" className="flex" onClick={scrollToTop}>
                                    <img src="src/assets/img/Web_Logo_BW Logo_Web Logo BW.png" className="h-20 me-4" alt="rose-jade-footer Logo" />
                                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Rose Jade</span> */}
                                </Link>
                                <p className='py-5 text-h5 text-justify'>At Rosejade, we are committed to empowering small businesses with innovative funding solutions like Merchant Cash Advances (MCA) and tailored financial strategies. Your success is our mission.</p>
                            </div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-12 my-5 md:gap-6 gap-4 py-5 ">
                                <div>  <h2 className="mb-6 text-sm font-semibold  uppercase">Quick Links</h2>
                                    <ul className="font-medium">
                                        <li className="mb-4">
                                            <Link href="/" className="hover:text-secondary text-h5 " onClick={scrollToTop}>Home</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/about" className="hover:text-secondary text-h5" onClick={scrollToTop}>About Us</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/service" className="hover:text-secondary text-h5" onClick={scrollToTop}>Services</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/contact" className="hover:text-secondary text-h5" onClick={scrollToTop}>Contact Us</Link>
                                        </li>

                                    </ul></div>
                                <div>
                                    {/* <h2 className="mb-6 text-sm font-semibold  uppercase ">Services</h2>
                                    <ul className=" font-medium">
                                        <li className="mb-4">
                                            <Link to="/" className="hover:text-secondary text-h5">Service 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="hover:text-secondary text-h5">Service 2</Link>
                                        </li>
                                    </ul> */}
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold  uppercase ">Legal & Compliance</h2>
                                    <ul className=" font-medium">
                                        <li className="mb-4">
                                            <Link to="/privacy-policy" className="hover:text-secondary " onClick={scrollToTop}>Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-conditions" className="hover:text-secondary " onClick={scrollToTop}>Terms &amp; Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
                <div className='absolute xl:bottom-[85%] left-1 right-1 md:left-[13%] md:right-[6%] lg:bottom-[80%] md:bottom-[86%] bottom-[90%] px-6'>
                    <div className=" rounded lg:flex items-center sm:gap-12 bg-primary text-white px-6 py-4  text-justify lg:px-16">
                        <div><h1 className=' capitalize font-bold md:text-h3 lg:text-h3 xl:leading-[45px] text-h4  md:py-10 '>Contact Us for a customized financial plan</h1></div>
                        <div className=' pt-5'>
                            <p className='lg:text-h5 lg:leading-8 sm:leading-6 md:leading-2 sm:text-h5 '>Be the first to know about the latest financial trends, exclusive funding opportunities, and expert tips to grow your business. Whether you’re looking for insights on Merchant Cash Advances (MCA) or personalized funding strategies, our updates will keep you informed and empowered.</p>
                            <div className="w-full flex justify-center items-center py-4">
                                <form className="flex flex-col sm:flex-row items-center  w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/2 xl:w-1/3">
                                    <input
                                        type="email"
                                        placeholder="Your Email Address..."
                                        className="flex-grow px-4 w-full lg:w-[15rem] md:w-60 py-2 mb-2 sm:mb-0 text-gray text-h6 placeholder-gray rounded-full sm:rounded-l-full sm:rounded-none outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-secondary text-white text-h5 px-2 py-2 md:w-48 rounded-full sm:rounded-r-full sm:rounded-none hover:border border-white transition duration-300 w-full sm:w-auto"
                                    >
                                        Subscription
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
