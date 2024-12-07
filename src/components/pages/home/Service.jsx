import React from 'react'

export default function Service() {
    return (
        <div className='bg-secondary'>
           <div className='container mx-auto px-16 text-white py-5 mt-10'>
                <div className='text-center'>
                    <h2 className="capitalize text-h2 mb-7">
                        our services for <br />
                        <p className='font-bold text-primary text-h1 leading-[60px]'>financial success</p>
                        </h2>
                    {/* <p className='text-h5 w-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Mollitia enim quam cumque reprehenderit ullam! Maiores aspernatur officia </p> */}
                </div>
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
                        <i className="fas fa-book text-primary text-h1"></i>
                        <h2 className='text-secondary-light text-5 mt-3 font-bold'>Business Equipment Financing</h2>
                            <p className="text-gray-dark text-h6 text-justify">
                            Whether you're purchasing new equipment or upgrading existing machinery, Rose Jade Inc. offers equipment financing options that allow you to acquire the tools you need without depleting your working capital.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
