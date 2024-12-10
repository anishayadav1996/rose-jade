import React from 'react';
import { Link } from 'react-router-dom';

export default function Joinourteam() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="">
            <div className="xl:container mx-auto px-6 lg:px-16 pt-6 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg overflow-hidden shadow-lg bg-white">
                    <div className="p-6 lg:p-12">
                        <h1 className=" sm:text-h3 lg:text-h3 font-bold mb-4 text-h4">
                            Join Our Network
                        </h1>
                        <p className="sm:text-h5   lg:text-xl text-justify">
                            At Rose Jade, we believe in the power of connection, creativity, and community. Joining our network isn’t just about signing up—it’s about becoming part of a movement that values individuality, innovation, and shared growth.
                        </p>
                    </div>
                    <div className="flex justify-center items-center p-6 lg:p-12">
                        <Link
                            onClick={scrollToTop}
                            to="/contact"
                            className="inline-block bg-primary text-white   hover:border border-primary hover:bg-white hover:text-primary py-3 px-6 rounded-full transition duration-300 ease-in-out"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
