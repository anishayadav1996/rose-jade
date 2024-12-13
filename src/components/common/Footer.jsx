import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        businessAge: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        contact: "",
        businessAge: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: "",
        });
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Enter a valid email address.";
        }

        if (!formData.contact.trim()) {
            errors.contact = "Contact is required.";
        } else if (!/^\d{10}$/.test(formData.contact)) {
            errors.contact = "Contact must be a 10-digit number.";
        }

        if (!formData.businessAge) {
            errors.businessAge = "Please select the age of your business.";
        }
        if (!formData.context) {
            errors.context = "Please checked the agree text";
        }
        
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
    
        try {
            console.log("Submitting Form Data:", formData); // Debugging log
    
            const response = await fetch("http://localhost/rose-jade/request.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), 
            });
    
            console.log("Response Status:", response.status); 
    
            const result = await response.json();
            console.log("Response Result:", result); // Debug the response
    
            if (result.status === "success") {
                alert("Form submitted successfully!");
                setIsFormOpen(false);
                setFormData({ name: "", email: "", contact: "", businessAge: "" });
            } else {
                alert( result.message);
            }
        }
        
        catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form.");
            setIsFormOpen(false);
        }
    
    };
    
    return (
        <>
            <div className="relative bottom-0 bg-brown">
                <footer className="xl:container lg:px-16 mx-auto px-6">
                    <div className="mx-auto px-16 pt-12 bottom-0">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-10 lg:gap-12 md:lg-5 gap-1 py-5 text-white">
                            <div className="mb-6 md:mb-0 mt-6">
                                <Link to="/" className="flex" onClick={scrollToTop}>
                                    <img
                                        src="src/assets/img/Web_Logo_BW Logo_Web Logo BW.png"
                                        className="h-20 me-4"
                                        alt="rose-jade-footer Logo"
                                    />
                                </Link>
                                <p className="py-5 text-h5 text-justify">
                                    At Rosejade, we are committed to empowering small businesses with
                                    innovative funding solutions like Merchant Cash Advances (MCA) and
                                    tailored financial strategies. Your success is our mission.
                                </p>
                            </div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-12 my-5 md:gap-6 gap-4 py-5 ">
                                <div>
                                    <h2 className="mb-6 text-h5  font-semibold uppercase">Quick Links</h2>
                                    <ul className="font-medium">
                                        <li className="mb-4">
                                            <Link href="/" className="hover:text-secondary text-h5" onClick={scrollToTop}>Home</Link>
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
                                    </ul>
                                </div>
                                <div>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-h5  font-semibold uppercase">Legal & Compliance</h2>
                                    <ul className="font-medium">
                                        <li className="mb-4">
                                            <Link to="/privacy-policy" className="hover:text-secondary" onClick={scrollToTop}>Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-conditions" className="hover:text-secondary" onClick={scrollToTop}>Terms &amp; Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="absolute xl:bottom-[85%] left-1 right-1 md:left-[13%] md:right-[8%] lg:bottom-[80%] md:bottom-[86%] bottom-[90%] px-6">
                    <div className="rounded lg:flex items-center sm:gap-12 bg-primary text-white px-6 py-4 text-justify lg:px-16">
                        <div>
                            <h1 className="capitalize font-bold md:text-h3 lg:text-h3 xl:leading-[45px] text-h4 md:py-10">
                                Contact Us for a customized financial plan
                            </h1>
                        </div>
                        <div className="pt-5">
                            <p className="lg:text-h5 lg:leading-8 sm:leading-6 md:leading-2 sm:text-h5">
                                Be the first to know about the latest financial trends, exclusive
                                funding opportunities, and expert tips to grow your business.
                            </p>
                            <div className="w-full flex justify-center items-center py-4">
                                <form className="flex flex-col sm:flex-row items-center  w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/2 xl:w-1/3">
                                    <input
                                        type="email"
                                        placeholder="Your E-mail Address..."
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
                <div
                    className="text-white text-h4 right-4 bottom-4  cursor-pointer rounded-full  bg-primary fixed"
                    onClick={() => setIsFormOpen(true)}
                >
                    <i class="fa-solid fa-message px-3 pt-3"></i>
                </div>
                {isFormOpen && (
                    <div
                         className="fixed bottom-20 right-4 bg-white rounded-lg p-6 shadow-lg z-50 left-4 sm:left-auto"
                    >
                        <span
                            className="absolute top-2 right-2 text-h2 cursor-pointer"
                            onClick={() => setIsFormOpen(false)}
                        >
                            &times;
                        </span>
                        <h2 className="text-h4 font-bold mb-4 text-secondary">Request a Call</h2>
                        <p className="text-p mb-5 text-justify text-gray">
                            Leave your contact info below for us to reach back to you
                        </p>
                        <form onSubmit={handleFormSubmit} className='' id="requestform">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-2 py-1 border rounded-lg placeholder:text-p"
                                    placeholder="Enter Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    
                                />
                                 {formErrors.name && (
                                    <p className="text-primary text-h5 mt-1">{formErrors.name}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-2 py-1 border rounded-lg placeholder:text-p"
                                    placeholder="Enter Your E-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    
                                />
                                    {formErrors.email && (
                                    <p className="text-primary text-h5 mt-1">{formErrors.email}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="contact"
                                    className="w-full px-2 py-1 border rounded-lg placeholder:text-p"
                                    placeholder="Enter Your Contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                   
                                />
                             
                                 {formErrors.contact && (
                                    <p className="text-primary text-h5  mt-1">{formErrors.contact}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <select
                                    name="businessAge"
                                    className="w-full px-2 py-1 border rounded-lg text-p"
                                    value={formData.businessAge}
                                    onChange={handleChange}
                                    
                                >
                                    <option value="">Age of business</option>
                                    <option value="less than 6 months">Less than 6 months</option>
                                    <option value="6 months to 3 years">6 Months to 3 years</option>
                                    <option value="more than 3 years">More than 3 years</option>
                                </select>
                                {formErrors.businessAge && (
                                    <p className="text-primary text-h5  mt-1">{formErrors.businessAge}</p>
                                )}
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="checkbox" type="checkbox"  checked={formData.context} onChange={handleChange} className="mr-2" name="context"/>
                                <p className="text-justify text-p">I agree to receive calls and e-mails from Rose Jade INC</p>
                             
                            </div>
                            {formErrors.context && (
                                <p className="text-primary text-sm mt-1">{formErrors.context}</p>
                            )}
                            <div className="flex justify-end">
                                <button type="submit" className="px-4 py-2 bg-secondary text-white rounded-full">
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                )}
            </div>
        </>
    );
}
