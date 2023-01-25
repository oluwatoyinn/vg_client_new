import React from "react";
import { Link } from "react-router-dom";
import Data from "../../utils/Data";
import ScheduleImage from "../../img/people_office.jpg";

const BrandingProductDev = () => {
  return (
    <div className="container mx-auto md:px-28">
      <div className="flex flex-col mx-auto">
        <h4 className="font-bold md:text-5xl text-3xl uppercase text-center mb-6 dark:text-gray-500">
          branding and product development
        </h4>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          The importance of branding in business cannot be ignored, it is
          absolutely critical to a business because of the overall impact it
          makes on your company and essential to how a company gets recognition
          and becomes known to the consumers
        </p>
      </div>
      <div className="flex justify-center md:justify-start pt-6 pb-6">
        <Link
          to="/schedule"
          className="p-1 px-6 pt-2 text-white hover:bg-white hover:text-black bg-red-500 uppercase"
        >
          Schedule Appointment
        </Link>
      </div>
      <div className="flex mx-auto justify-end mb-10 ml-3 mr-3">
        <div className=" mr-12 grayscale">
          <img src={ScheduleImage} alt="business-development" />
        </div>
        <div className="">
          <h3 className="uppercase border-b-2 border-red-500 space-x-7 mb-4 text-2xl font-bold text-gray-500 dark:text-gray-500 ">
            Services
          </h3>
          <div className="dark:text-gray-500">
            <h2 className="uppercase space-x-7 mb-4 md:text-2xl font-bold dark:text-gray-500">
              branding and product development
            </h2>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Branding can change how people perceive your brand, it can drive
              new business and increase brand awareness. Since branding is
              important because it makes a memorable impression on consumers it
              allows your customers and clients to know what to expect from your
              company
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Branding is important when trying to generate future business, and
              a strongly established brand can increase a business’ value by
              giving the company more leverage in the industry.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              This makes it a more appealing investment opportunity because of
              its firmly established place in the marketplace. Our expertise
              includes but not limited to:
            </p>
            <div>
              {Data.branding.map((schedule) => {
                return (
                  <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row pb-4">
                    <div className="rounded-l-full bg-red-200 md:bg-transparent">
                      <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                          {schedule.id}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500 max-w-md">
                        {schedule.message}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingProductDev;
