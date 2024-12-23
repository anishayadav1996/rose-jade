import React from 'react'

export default function Benefits() {
    return (
        <>
        <div className='sm:px-6 py-20 px-6 mx-auto xl:container'>
            <div className="mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-12 ">
            <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
                <div className="flex flex-col space-y-5 px-6 lg:px-16">
                    
                    <h2 className="capitalize sm:text-h2 font-bold  text-h3 text-primary mb-3 lg:leading-[50px] leading-[50px]">Benefits of Equipment Financing at Rose Jade Inc.
                    </h2>
                    <p className='text-justify pt-2 leading-6'>When you work with Rose Jade Inc., you gain access to a range of benefits designed to support your business:</p>
                    <ol className="mb-20 list-decimal leading-8">
                        <li>
                            <span className="font-bold">
                            Preserve Cash Flow:
                            </span>
                            Financing allows you to avoid large upfront payments, keeping your working capital intact for other critical business expenses.
                        </li>
                        <li>
                            <span className="font-bold">Flexible Terms: </span>
                            We offer a variety of financing options with customizable terms, ensuring you find a plan that fits your specific business needs.
                        </li>
                        <li>
                            <span className="font-bold">Quick Approval: </span>
                            Our streamlined application process means fast approvals and minimal paperwork, helping you get the equipment you need without delay.
                        </li>
                        <li>
                            <span className="font-bold">
                            Competitive Rates:
                            </span>
                            Benefit from affordable interest rates, making it easier to invest in high-quality equipment without straining your budget.

                        </li>
                        <li>
                            <span className="font-bold">
                            Tax Benefits:
                            </span>
                            Take advantage of potential tax deductions through equipment depreciation, helping to lower your tax liabilities.
                        </li>
                    </ol>

                </div>
               
            </div>
            </div>
        </>
    )
}
