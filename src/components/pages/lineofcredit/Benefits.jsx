import React from 'react'

export default function Benefits() {
  return (
    <>
       <div className='sm:px-6 py-20 px-6 mx-auto xl:container '>
            <div className="mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-12 ">
                <div className="flex flex-col space-y-5 px-6 lg:px-16">
                    <h2 className="capitalize sm:text-h2 font-bold  text-h3 text-primary mb-3 lg:leading-[50px] leading-[50px]">Benefits of a Line of Credit at Rose Jade Inc.
                    </h2>
                    <ol className="mb-20 list-decimal leading-9">
                        <li>
                            <span className="font-bold">
                            Preserve Cash Flow : 
                            </span>
                            A business line of credit ensures that you have access to funds without disrupting your daily operations. It helps you keep your cash flow stable, even when unexpected expenses arise.
                        </li>
                        <li>
                            <span className="font-bold">Flexible Access to Funds : </span>
                            With a revolving credit line, you can borrow and repay as needed. You’ll never have to worry about applying for a loan each time you need capital.
                        </li>
                        <li>
                            <span className="font-bold">Quick Access to Funds : </span>
                            Once approved, you can access the funds immediately whenever you need them—ideal for emergency purchases or capitalizing on growth opportunities.
                        </li>
                        <li>
                            <span className="font-bold">
                            Only Pay for What You Use : 
                            </span>
                            Interest is only charged on the amount you borrow, which keeps your costs lower compared to traditional loans.

                        </li>
                        <li>
                            <span className="font-bold">
                            Boost Your Credit Profile : 
                            </span>
                            A line of credit helps you establish and strengthen your business credit, especially when you manage your payments responsibly.
                        </li>
                    </ol>

                </div>
                <div className="px-6"><img className="rounded-lg w-auto h-full  md:w-full object-cover object-top" src=" src/assets/img/about-home.jpg" alt="about-img" /></div>
            </div>
            </div>
    </>
  )
}
