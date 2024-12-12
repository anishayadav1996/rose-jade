import React, { useState } from 'react';

const Footer = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Toggle the contact form
    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
            {/* Envelope Icon */}
            <div className='text-white text-h2  right-2 bottom-0 absolute' onClick={toggleForm}>
                <i class="fa-solid fa-envelope"></i>
                
                </div>

            {/* Contact Form */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-1">Message</label>
                                <textarea
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Message"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 mr-2"
                                    onClick={toggleForm}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
