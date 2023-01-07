import React from "react";
import Data from "../utils/Data";

const ContactUs = () => {
  return (
    <div className="container mx-auto pb-6">
      <div className="flex flex-row ">
        {Data.contactUsData.map((address) => {
          return (
            <div className="container flex flex-col space-y-3 mx-auto w-80 h-80 bg-red-400">
              <div className="flex flex-col mx-auto px-6 py-6">
                <span className="mx-auto text-white">{address.icon}</span>
                <h3 className="mx-auto font-bold uppercase py-8 text-white">
                  {address.title}
                </h3>
                <p className="text-center text-base text-white">
                  {address.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mx-auto w-3/4 bg-red-300 h-96 -mt-16 rounded-md">
        <div className="py-28 mx-auto">
          <h3 className="text-5xl font-bold text-white"> Contact Us</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
