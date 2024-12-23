import React, { useState } from "react";

export default function Faq({ data }) {
  const [openItem, setOpenItem] = useState(null);
  console.log("FAQ Data (on render):", data);  // Log during render
  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="xl:container px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[28rem] md:mb-[25rem] mb-[30rem] py-15">
        <h2 className="font-bold py-6 text-h3 px-6">Frequently Asked Questions</h2>
        <div className="space-y-4 pb-8">
          {data.map((item, index) => (
            <div key={index} className="border-b-2 border-gray rounded-md">
              <button
                className="flex items-center justify-between w-full px-5 py-4 text-left font-medium text-gray-dark focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItem === index && (
                <div className="p-5 text-gray-dark">
                  <p className="lg:text-h5 lg:leading-8 sm:leading-4 md:leading-2 sm:text-h6">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
