import React from 'react'

export default function Privacy() {
  return (
    <>
      <div className='py-5 bg-secondary'>
        <div className="container mx-auto px-16">
          <p className='text-center text-primary font-bold capitalize text-h1'>Privacy Policy</p>
          <p className='mb-6 leading-8 text-h5 text-justify text-center text-white'>At Rose Jade Inc., we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website, products, and services. By using our services, you agree to the practices described in this policy.</p>
        </div>
      </div>
      <div className="container px-16 mx-auto py-20">
        <div className="flex flex-col space-y-5">
          <ul className="">
            <li className='font-bold text-h4'>1. Information We Collect</li>
            <li>
              <ul>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <h3 className="text-h5 font-medium leading-6 text-gray-dark list-disc">Personal Information:
                    </h3>
                    <p className="text-gray-dark text-h5 text-justify">Includes your name, email address, phone number, and business details when you register, inquire, or interact with our services.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-h5 font-medium leading-6 text-gray-dark list-disc">Non-Personal Information:
                    </h3>
                    <p className="text-gray-dark  text-h5 text-justify">Data such as IP addresses, browser types, and usage patterns collected automatically when you visit our website.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-h5 font-medium leading-6 text-gray-dark flex list-disc">Payment Information:</h3>
                    <p className="text-gray-dark  text-h5 text-justify">Securely collected through trusted third-party payment processors for transactions.</p>
                  </div>
                </li>
              </ul>
            </li>

          </ul>

          <ul className="mb-20">
            <li className='font-bold text-h4'>2. How We Use Your Information</li>
            <li>
              <ul>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <p className="text-gray-dark text-h5 text-justify list-disc">To provide and improve our services.</p>
                  </div>
                </li>
                <li className="flex">
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
                </li>
              </ul>
            </li>

          </ul>
          <ul className="mb-20">
            <li className='font-bold text-h4'>3. Sharing Your Information</li>
            <li>
              <ul>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <h3 className="text-h5 font-medium leading-6 text-gray-dark list-disc">With Trusted Partners:
                    </h3>
                    <p className="text-gray-dark text-h5 text-justify list-disc">To deliver our services (e.g., payment processors, marketing tools).</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-h5 font-medium leading-6 text-gray-dark list-disc">For Legal Compliance:
                    </h3>
                    <p className="text-gray-dark  text-h5 text-justify list-disc">When required by law, or to protect our rights, users, or operations.</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="mb-20">
            <li className='font-bold text-h4'>4. How We Protect </li>
            <p className="text-gray-dark  text-h5 text-justify">We take data security seriously. We implement industry-standard measures to protect your information, including encryption, secure servers, and restricted access to sensitive data.</p>


          </ul>
        </div>
      </div>
    </>
  )
}
