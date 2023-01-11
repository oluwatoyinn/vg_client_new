import React from "react";
import { Link } from "react-router-dom";
import Data from "../../utils/Data";
import ScheduleImage from "../../img/people_office.jpg";

const TaxPlanning = () => {
  return (
    <div className="container mx-auto md:px-28">
      <div className="flex flex-col mx-auto">
        <h4 className="font-bold md:text-5xl text-3xl uppercase text-center mb-6 dark:text-gray-500">
          tax planning
        </h4>
        <p className="mx-auto text-lg md:text-center text-justify p-3 mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          We assist businesses, individuals and organizations with tax strategy,
          planning, and compliance through a careful and deliberate structuring
          of the company’s activities we provide advice on tax planning with an
          objective of minimizing the organization’s tax burden and aims to
          reduce one’s tax liabilities and optimally utilize tax exemptions,
          rebates, and benefits as much as possible.
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
            <h2 className="uppercase space-x-7 mb-4 text-2xl font-bold dark:text-gray-500">
              Tax Planning
            </h2>
            <p className="text-lg mb-6 text-gray-500 md:text-justify md:text-base">
              We deliver deep knowledge of tax and statutory requirements as
              well as a breadth of experience applying them in practice
              worldwide and offer clients a wide range of fully integrated tax
              services.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-justify md:text-base">
              Our approach combines insight and innovation from multiple
              disciplines with business and industry knowledge to help your
              company excel globally.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-justify md:text-base">
              We use the depth of our knowledge and wealth of our involvement
              and proficiency to identify possible substitutes where necessary
              to ensure utmost tax efficiency in your business.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-justify md:text-base">
              We render the following tax services to our clients:
            </p>
            <div>
              {Data.taxType.map((schedule) => {
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

export default TaxPlanning;
