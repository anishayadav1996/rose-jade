import React from "react";
import Btn from "../../common/Btn";

export default function Service() {
  // const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   };
  return (
    <div className="bg-secondary">
      <div className="xl:container px-6 lg:px-16 mx-auto py-20 ">
        <div className="text-center">
          <h2 className="capitalize text-h3 text-white font-bold">
            our services 
            {/* <br />
            <p className="font-bold text-primary text-h1 leading-[60px]">
              financial success
            </p> */}
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-5 text-center py-5 sm:px-6">
          <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-8">
              <i className="fas fa-money-check text-primary text-h1"></i>
              <h2 className="text-secondary-light  mt-3 font-bold text-h5">
                Merchant Cash Advance
              </h2>
              <p className=" text-h5 text-center  leading-6 pt-2 pb-5">
                Quick funding to fuel your business growth.
              </p>

              <Btn value={"Read More"} txtcolor={"primary"} textcolor ={"white"} urllink={"merchant-cash"}/>
            </div>
          </div>
          <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-8">
              <i className="far fa-credit-card text-primary text-h1"></i>
              <h2 className="text-secondary-light mt-3 font-bold text-h5">
                Line of Credit
              </h2>
              <p className=" text-h5 text-center y leading-6 pt-2 pb-5">
                Flexible financing for every business need.
              </p>

              <Btn value={"Read More"} txtcolor={"primary"} textcolor ={"white"} urllink={"line-of-credit"}/>
            </div>
          </div>
          <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-8">
              <i className="fas fa-book text-primary text-h1"></i>
              <h2 className="text-secondary-light mt-3 font-bold text-h5">
                Business Equipment Financing
              </h2>
              <p className=" text-h5 text-center leading-6 pt-2 pb-5">
                Get the tools to power your business growth.
              </p>

              <Btn value={"Read More"} txtcolor={"primary"} textcolor ={"white"} urllink={"equipment-financing"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
