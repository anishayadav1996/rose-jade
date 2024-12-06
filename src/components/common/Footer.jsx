import React from 'react';
import { Link } from "react-router-dom";

export default function footer() {
    return (
        <div className="relative">
            <footer className="bg-brown dark:bg-gray">
                <div className=" mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img src="src/assets/img/Web_Logo_BW Logo_Web Logo BW.png" className="h-14 me-4" alt="rose-jade-footer Logo" />
                                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Rose Jade</span> */}
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Pages</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="/" className="hover:text-secondary text-white">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:text-secondary text-white">About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Services</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to="/" className="hover:text-secondary text-white">Service 1</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:text-secondary text-white">Service 2</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Policy</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to="/" className="hover:text-secondary text-white">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:text-secondary text-white">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center text-white hover:text-secondary">© 2024-25 <Link href="/" className="hover:underline">All rights reserved. Rose Jade Inc.</Link>
                        </span>
                    </div>

                </div>
                <div className="absolute left-[13%] bottom-[85%] h-[50%] w-[70%] bg-white rounded  grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
                    <div><h1>Contact Us for a Customized Financial Plan</h1></div>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <form className="w-full max-w-lg">
                            <div className="w-full flex my-2 relative">
                                <input className=" block w-full  border border-gray-dark rounded-full h-10 " type="text" placeholder="Subscriptions" />
                                <input className="bg-secondary absolute right-0 h-10 bottom-0 top-0 rounded-full w-40" type="submit" Value='Subscriptions' />
                            </div>
                        </form>
                    </div>

                </div>
            </footer>
        </div>
    )
}
