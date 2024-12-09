import React from 'react'

export default function Terms() {
  return (
    <>
      <div className='py-5 bg-secondary'>
        <div className="container mx-auto px-16">
          <p className='text-center text-primary font-bold capitalize text-h1'>Terms and Conditions</p>
          <p className='mb-6 leading-8 text-h5 text-justify  text-white'>Welcome to Rose Jade Inc. These Terms and Conditions govern your use of our website, services, and any interactions you have with us. By accessing or using our services, you agree to comply with these terms. If you do not agree, please refrain from using our services.</p>
        </div>
      </div>
      <div className="container mx-auto px-16 pt-10 lg:mb-96 sm:mb-16">
        <div className="flex flex-col space-y-5">
          <ul className="">
            <li className='font-bold text-h4'>1. Acceptance of Terms</li>
            <li>
              <ul>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark text-h5 text-justify">By using our website and services, you confirm that you are at least 18 years old and capable of entering into a legally binding agreement. If you are using our services on behalf of a business, you represent that you have the authority to bind that business to these terms.</p>
                  </div>
                </li>
              </ul>
            </li>

          </ul>

          <ul className="mb-20">
            <li className='font-bold text-h4'>2. Services Provided</li>
            <li>
              <ul>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark text-h5 text-justify list-disc">Rose Jade Inc. provides business support services, including but not limited to strategy planning, marketing, technology solutions, and training. The scope of our services is outlined in agreements or contracts specific to each engagement.</p>
                  </div>
                </li>
                {/* <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark  text-h5 text-justify list-disc">To communicate with you regarding inquiries, updates, and promotional offers.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark  text-h5 text-justify list-disc">To personalize your experience with tailored content and recommendations.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark  text-h5 text-justify list-disc">To process payments and manage transactions securely.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark  text-h5 text-justify list-disc">To comply with legal obligations and ensure the security of our platform.</p>
                  </div>
                </li> */}
              </ul>
            </li>
          </ul>
          <ul className="mb-20">
            <li className='font-bold text-h4'>3. User Responsibilities</li>
            <li>
              <ul>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <h3 className="text-h5 font-medium leading-6 text-gray-dark list-disc">As a user of our services, you agree to:
                    </h3>
                    <p className="text-gray-dark text-h5 text-justify list-disc">Provide accurate and complete information during registration or communication.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark  text-h5 text-justify list-disc">Use our services only for lawful purposes and in compliance with these terms.</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="mb-20">
            <li className='font-bold text-h4'>4. Payments and Fees </li>
            <li>
              <ul>
                <li className="flex">
                  <div className="ml-4 mb-4">
                   
                    <p className="text-gray-dark text-h5 text-justify list-disc">All fees for our services are clearly outlined in contracts or invoices provided to you</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark  text-h5 text-justify list-disc">Payments must be made on time as per the agreed terms. Late payments may incur additional charges.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark  text-h5 text-justify list-disc">We use secure third-party payment processors, and by making a payment, you agree to their terms and conditions.</p>
                  </div>
                </li>
              </ul>
            </li>


          </ul>
        </div>
      </div>
    </>
  )
}
