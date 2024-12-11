import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
         // Clear specific field error when user types
         setErrors({
          ...errors,
          [e.target.name]: "",
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    // If errors exist, set them and stop submission
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }
    try {
      const response = await fetch("http://localhost/rose-jade/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success) {
        setResponseMessage(result.message);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
    } else {
        setResponseMessage(result.message);
    }
} catch (error) {
    setResponseMessage("Error connecting to the server.");
}
};
  return (
    <>
      <div className='py-5 bg-secondary'>
        <div className="container mx-auto lg:px-16 px-6">
          <p className='text-center text-primary font-bold capitalize text-h1'> get in touch</p>
          <p className='mb-6 leading-8 text-h5 text-justify text-white'>We’d love to hear from you! Whether you have questions, need support, or want to explore how Rose Jade Inc. can help your business thrive, our team is here for you.</p>
        </div>
      </div>
      <div className="xl:container  px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[20rem] ] mb-[30rem]  mt-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-12 my-5  py-5 ">
          <div className=''>
            <p className='mb-6 leading-8 text-h5 text-justify'>
              Have a specific question or need more information? Fill out the form below, and we’ll respond as soon as possible:
            </p>
            <ul className="mb-20 ">
              <li className="flex ">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-secondary text-primary">
                  <i className="fa fa-map-marker text-h4" aria-hidden="true"></i>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="text-h5 font-medium leading-6 text-gray-dark">Our Address
                  </h3>
                  <p className="text-gray-dark text-h5 text-justify">1230 Maecenas Street Donec Road</p>
                  <p className="text-gray-dark text-h5 text-justify">New York, EEUU</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-secondary text-primary">
                  <i className="fa fa-phone text-h4" aria-hidden="true"></i>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-h5 font-medium leading-6 text-gray-dark">Contact
                  </h3>
                  <p className="text-gray-dark  text-h5 text-justify">Mobile: +1 (123) 456-7890</p>
                  <p className="text-gray-dark  text-h5 text-justify">Mail: tailnext@gmail.com</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-secondary text-primary">
                  <i class="fa-solid fa-clock text-h4"></i>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-h5 font-medium leading-6 text-gray-dark">Working
                    hours</h3>
                  <p className="text-gray-dark  text-h5 text-justify">Monday - Friday: 08:00 - 17:00</p>
                  <p className="text-gray-dark text-h5 text-justify">Saturday &amp; Sunday: 08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>
          <div className=''>

            <p className='mb-6 leading-6 text-h4 text-justify font-bold'>Ready to Get Started?</p>
            <form className="" id="contactForm" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <input
                                        type="text"
                                        id="name"
                                        autoComplete="given-name"
                                        placeholder="Your name"
                                        onChange={handleChange}
                                        value={formData.name}
                                        className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md text-gray sm:mb-0"
                                        name="name"
                                    />
                                    {errors.name && <p className="text-primary text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder="Your email address"
                                        onChange={handleChange}
                                        value={formData.email}
                                        className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md text-gray sm:mb-0"
                                        name="email"
                                    />
                                    {errors.email && <p className="text-primary text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <textarea
                                        id="message"
                                        name="message"
                                        cols="30"
                                        rows="5"
                                        placeholder="Write your message..."
                                        onChange={handleChange}
                                        value={formData.message}
                                        className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md text-gray sm:mb-0"
                                    ></textarea>
                                    {errors.message && <p className="text-primary text-sm mt-1">{errors.message}</p>}
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full border border-secondary text-secondary px-6 py-3 font-xl rounded-md sm:mb-0 hover:text-primary"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                        {responseMessage && <p className="text-center text-secondary mt-4">{responseMessage}</p>}
                    </div>
        </div>
      </div>

    </>



  )
}
