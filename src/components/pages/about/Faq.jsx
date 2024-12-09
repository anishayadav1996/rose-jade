import React, { useState } from "react";

export default function Faq() {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="bg-white">
      {/* <div className='container mx-auto xl:px-16 pb-1  mt-5 lg:mb-96 sm:mb-16'> */}
      <div className="xl:container  px-6 lg:px-16 mx-auto lg:mb-96">
        <h2 className=" font-bold  py-6 text-h3 ">Frequently Asked Questions</h2>
        <div className="space-y-4 pb-8">
          {/* Accordion Item 1 */}
          <div className="border-b-2 border-gray rounded-md">
            <button
              className="flex items-center justify-between w-full px-5 py-4 text-left font-medium text-gray-dark focus:outline-none"
              onClick={() => toggleAccordion(1)}
            >
              <span>When is payment taken for my order?</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openItem === 1 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openItem === 1 && (
              <div className="p-5 text-gray-dark ">
              <p className='lg:text-h5 lg:leading-8 sm:leading:4 md:leading-2 sm:text-h6 '>
                  Payment is taken during the checkout process when you pay for your order. The order number that appears on the
                  confirmation screen indicates payment has been successfully processed.
                </p>
              </div>
            )}
          </div>

          {/* Accordion Item 2 */}
          <div className="border-b-2 border-gray rounded-md">
            <button
              className="flex items-center justify-between w-full px-5 py-4 text-left font-medium text-gray-dark focus:outline-none"
              onClick={() => toggleAccordion(2)}
            >
              <span>How would you ship my order?</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openItem === 2 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openItem === 2 && (
              <div className="p-5 text-gray-dark ">
              <p className='lg:text-h5 lg:leading-8 sm:leading:4 md:leading-2 sm:text-h6 '>
                  For large products, we deliver your product via a third-party logistics company offering you the “room of
                  choice” scheduled delivery service. For small products, we offer free parcel delivery.
                </p>
              </div>
            )}
          </div>

          {/* Accordion Item 3 */}
          <div className="border-b-2 border-gray rounded-md">
            <button
              className="flex items-center justify-between w-full px-5 py-4 text-left font-medium text-gray-dark focus:outline-none"
              onClick={() => toggleAccordion(3)}
            >
              <span>Can I cancel my order?</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openItem === 3 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openItem === 3 && (
              <div className="p-5 text-gray-dark ">
                <p className='lg:text-h5 lg:leading-8 sm:leading:4 md:leading-2 sm:text-h6 '>
                  Scheduled delivery orders can be canceled 72 hours prior to your selected delivery date for a full refund.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
