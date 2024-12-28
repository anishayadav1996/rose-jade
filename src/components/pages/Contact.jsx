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
      const response = await fetch("http://localhost:8080/api/contact/new-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      console.log(result)
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
          <p className='mb-6 leading-8 text-h5 text-justify text-white'>Ready to take your business to the next level? Contact Rose Jade Inc. today for flexible and transparent funding solutions tailored to your needs. Whether you’re looking for immediate funding through our Merchant Cash Advance, a flexible Line of Credit, or essential Equipment Financing, we’re here to help your business thrive.</p>
        </div>
      </div>
      <div className="xl:container  px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[20rem] ] mb-[30rem]  mt-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-12  ">
          <div className=''>
            <p className='mb-6 leading-8 text-h5 text-justify'>
              Our expert team is dedicated to guiding you every step of the way, ensuring you get the right financial solution to fuel your business growth. With a simple and straightforward process, we make accessing the funds you need fast and hassle-free.
            </p>
            <ul className="mb-20 ">
              <li className="flex ">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-secondary text-primary">
                  <i className="fa fa-map-marker text-h4" aria-hidden="true"></i>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="text-h5 font-medium leading-6 text-gray-dark">Our Address
                  </h3>
                  <p className="text-gray-dark text-h5 text-justify">86A N Mada Ave, Staten Island,</p>
                  <p className="text-gray-dark text-h5 text-justify">NY 10310, USA</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-secondary text-primary">
                  <i className="fa fa-phone text-h4" aria-hidden="true"></i>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-h5 font-medium leading-6 text-gray-dark">Contact
                  </h3>
                  <p className="text-gray-dark  text-h5 text-justify">Phone:  (555) 123-4567</p>
                  <p className="text-gray-dark  text-h5 text-justify">E-Mail:  info@rosejadeinc.com</p>
                  <p className="text-gray-dark  text-h5 text-justify">Website:  www.rosejadeinc.com</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-secondary text-primary">
                  <i class="fa-solid fa-clock text-h4"></i>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-h5 font-medium leading-6 text-gray-dark">Working
                    hours</h3>
                  <p className="text-gray-dark  text-h5 text-justify">Monday - Friday: 09:00 - 17:00 </p>
                  <p className="text-gray-dark text-h5 text-justify">Saturday &amp; Sunday: Not Available (Appointments only)
                  </p>
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
                    placeholder="Your e-mail address"
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
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-12'>
        <div className='w-1/2 h-1/2'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28471.6552069472!2d80.99921919148511!3d26.873110376400444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734681336951!5m2!1sen!2sin" title="do it for me" className='w-[600px] h-[560px]' ></iframe></div>
        <div className='text-justify'>
          <p className='mb-3 leading-6 text-h4  font-bold'>How We Handle Your Inquiries</p>
          <p className='text-h5'>Once you submit the form, our team will assess the urgency of your request based on the information provided. You can expect a response within the following timeframes:</p>
          <ul>
            <li className='font-bold py-2'>Top Priority
            </li>
           <span className='text-p'>	•	Funding requirements for small and medium-sized businesses: </span>
           <li className='font-bold py-2'>Response within 2 working hours.</li>
           <span className='font-semibold'>	Medium Priority</span>
           <li className='text-p px-3 pt-1'>•	Existing customer inquiries regarding repayment and other queries.</li>
           <li className='text-p px-3 pt-1'>•	Partnership inquiries from ISOs and other brokers.</li>
           <li className='text-p px-3 pt-1'>•	Career-related questions from job applicants.</li>
          </ul>
          <h3 className='font-bold mt-7'>Response within 4 to 24 working hours.</h3>
          <ul><li className='font-semibold px-3'>	•	Lower Priority</li>
            <span className='text-p px-6'>	•	General questions or inquiries from Marketing and PR teams.</span>
            <li className='font-semibold px-3'>	•	No Response</li>
            <span className='text-p px-6'>•	Spam and fraudulent inquiries will be disregarded. (We kindly request that you use this form responsibly.)</span>
          </ul>
          <p className='text-h5 mt-3'>We appreciate your understanding and look forward to assisting you!</p>
          <p className='text-h5 font-semibold pt-1'>Your success story begins here—contact Rose Jade Inc. now and unlock your business’s true potential!
          </p>
        </div>
      </div>

      </div>

    </>



  )
}
