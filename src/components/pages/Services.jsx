import React from 'react'

export default function Services() {
  return (
    <>
      <div className='py-5 bg-secondary'>
        <div className="container mx-auto px-16">
          <p className='text-center text-primary font-bold capitalize text-h1'> our services</p>
          <p className='mb-6 leading-8 text-h5  text-center text-white'>At Rose Jade Inc., we are dedicated to providing innovative, personalized solutions to help small businesses thrive. Whether you’re just starting or looking to scale, our comprehensive services are designed to meet your unique needs and empower your business to succeed.</p>
        </div>
      </div>


      <div className='container mx-auto xl:px-16 py-5  mt-5 lg:mb-96 sm:mb-96'>
        {/* <div className='container mx-auto text-white py-5 mt-10'> */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-5 text-center py-5 ">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-8">
                <i className="fas fa-money-check text-primary text-h1"></i>
                <h2 className='text-secondary-light text-5 mt-3 font-bold'>Business Cash Advance</h2>
                <p className="text-gray-dark text-h6 text-justify">
                  When you need fast access to cash without the hassle of traditional loans, a Business Cash Advance from Rose Jade Inc. offers the flexibility you need to manage your cash flow. Repayments are tied to your daily sales, making it easy to pay back as you grow.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-8">
                <i className="far fa-credit-card text-primary text-h1"></i>
                <h2 className='text-secondary-light text-5 mt-3 font-bold'>Line of Credit</h2>
                <p className="text-gray-dark text-h6 text-justify">
                  A revolving line of credit can be a game-changer for your business. Get access to funds whenever you need them with a line of credit from Rose Jade Inc., helping you manage unexpected expenses and support growth initiatives.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-8">
              <i className="fa-solid fa-microchip text-primary text-h1"></i>
                
                <h2 className='text-secondary-light text-5 mt-3 font-bold'>Technology Solutions</h2>
                <p className="text-gray-dark text-h6 text-justify">
                Embrace the power of technology to streamline operations and enhance customer experiences. We offer tailored tech solutions to drive efficiency and growth.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-8">
                <i className="fas fa-mail-bulk text-primary text-h1"></i>
                <h2 className='text-secondary-light text-5 mt-3 font-bold'>Financial & Operational Support</h2>
                <p className="text-gray-dark text-h6 text-justify">
                Manage your business with confidence. Our team provides financial guidance and operational expertise to optimize your processes and improve profitability.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-8">
                <i className="fas fa-envelope-open-text text-primary text-h1"></i>
                <h2 className='text-secondary-light text-5 mt-3 font-bold'>Digital Marketing & Branding</h2>
                <p className="text-gray-dark text-h6 text-justify">
                Stand out in the crowded marketplace with a compelling online presence. We craft customized marketing campaigns and build brands that resonate with your audience.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-8">
              <i className="fas fa-book text-primary text-h1"></i>
                <h2 className='text-secondary-light text-5 mt-3 font-bold'>Business Equipment Financing</h2>
                <p className="text-gray-dark text-h6 text-justify">
                  Whether you're purchasing new equipment or upgrading existing machinery, Rose Jade Inc. offers equipment financing options that allow you to acquire the tools you need without depleting your working capital.
                </p>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>



    </>
  )
}
