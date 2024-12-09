import React from 'react';
export default function Contact() {
  return (
    <>
      <div className='py-5 bg-secondary'>
        <div className="container mx-auto px-16">
          <p className='text-center text-primary font-bold capitalize text-h1'> get in touch</p>
          <p className='mb-6 leading-8 text-h5 text-justify text-white'>We’d love to hear from you! Whether you have questions, need support, or want to explore how Rose Jade Inc. can help your business thrive, our team is here for you.</p>
        </div>
      </div>
      <div className='container mx-auto xl:px-16 py-5  mt-5 lg:mb-96 sm:mb-96'>
        <div className="grid grid-cols-2 gap-4">
          <div className=''>
          <p className='mb-6 leading-8 text-h5 text-justify'>
              Have a specific question or need more information? Fill out the form below, and we’ll respond as soon as possible:
            </p>
            <ul className="mb-20">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-white">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="text-h5 font-medium leading-6 text-gray-dark">Our Address
                  </h3>
                  <p className="text-gray-dark text-h5 text-justify">1230 Maecenas Street Donec Road</p>
                  <p className="text-gray-dark text-h5 text-justify">New York, EEUU</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-white">
                <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-h5 font-medium leading-6 text-gray-dark">Contact
                  </h3>
                  <p className="text-gray-dark  text-h5 text-justify">Mobile: +1 (123) 456-7890</p>
                  <p className="text-gray-dark  text-h5 text-justify">Mail: tailnext@gmail.com</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-white">
                <i class="fa-solid fa-clock"></i>
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
          <p className='mb-6 leading-8 text-h4 text-justify font-bold'>Ready to Get Started?</p>
            <form className="" id="contactForm">
              <div className="mb-6">
                <div className="mx-0 mb-1 sm:mb-4">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label for="name" className="pb-1 text-xs uppercase "></label>
                    <input type="text" id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md text-gray sm:mb-0" name="name" />
                  </div>
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label for="email" className="pb-1 text-xs uppercase "></label>
                    <input type="email" id="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md text-gray sm:mb-0" name="email" />
                  </div>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label for="textarea" className="pb-1 text-xs uppercase "></label>
                  <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray py-2 pl-2 pr-4 shadow-md text-gray sm:mb-0"></textarea>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="w-full bg-secondary text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>



  )
}
