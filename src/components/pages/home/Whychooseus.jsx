import React from "react";

export default function Whychooseus() {
  return (
    <>
      <div className="xl:container lg:px-16  mx-auto py-20 px-6">
        <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-12 ">
          <div className="flex flex-col space-y-5 px-6">
            <h2 className="capitalize sm:text-h2 font-semibold text-primary text-h4 mb-3 lg:leading-[40px] leading-[50px]">
              Why Choose Rose Jade?
            </h2>
            <p className="text-justify text-h5 pt-2 leading-6">
              At Rose Jade, we simplify the financing process to help small
              businesses grow. With tailored solutions like Merchant Cash
              Advances, Lines of Credit, and Equipment Financing, we provide
              flexible funding options that support your unique needs. Our
              experts are here to guide you every step of the way, ensuring
              long-term success.
            </p>
            <p className="text-justify text-h5 pt-2 leading-6">
              Our experts will guide you every step of the way, ensuring that
              you get the right solution for your needs. Just a few quick
              details about your business, and you’re on your way to accessing
              the funds that empower growth. Let’s build your success story
              together.
            </p>
            <h2 className="capitalize sm:text-h3 font-bold text-primary text-h5 mb-3 lg:leading-[40px] leading-[50px]">
              Benefits of Partnering with Rose Jade:
            </h2>
            <ul className="mb-20 list-disc">
              <li>
                <span className="font-bold text-5">
                  Fast and easy access to funds{" "}
                </span>
                with minimal paperwork and quick approval.
              </li>
              <li>
                <span className="font-bold text-h5">Flexible repayment options: </span>
                tailored to your business’s cash flow.
              </li>
              <li>
                <span className="font-bold text-h5">Expert guidance and support: </span>
                at every step, helping you make informed decisions.
              </li>
              <li>
                <span className="font-bold text-h5">
                  Transparent terms and no hidden fees:{" "}
                </span>
                so you know exactly what to expect.
              </li>
            </ul>
          </div>
          <div className="px-6">
            <img
              className="rounded-lg w-auto h-full  md:w-full object-cover object-top"
              src=" src/assets/img/about-home.jpg"
              alt="about-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
