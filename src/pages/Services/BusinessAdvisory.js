import React from "react";
import { Link } from "react-router-dom";
import ScheduleImage from "../../img/people_office.jpg";
import Data from "../../utils/Data";

const BusinessAdvisory = () => {
  return (
    <div className="container mx-auto md:px-28">
      <div className="flex flex-col mx-auto">
        <h4 className="font-bold text-5xl uppercase text-center mb-6 dark:text-gray-500">
          Business Developement And Advisory Service
        </h4>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          Our approach is client-centric, geared towards delivering customized
          business solutions that deliver lasting value to their businesses. We
          satisfy the primary objective such as sales growth, business
          expansion, the formation of strategic partnerships, and increased
          profitability. To impacts every department within a company, including
          sales, marketing, manufacturing, human resources, accounting, finance,
          product development, and vendor management
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
              Business Developement And Advisory Service{" "}
            </h2>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              We at VG2R business development and solution limited provides
              financial management advice on operating and financing structures
              based on our thorough understanding of costing and management
              accounting systems to enhance strategic direction, revenue
              generation, market positioning and growth:
            </p>
            <div>
              {Data.scheduleDetails.map((schedule) => {
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

export default BusinessAdvisory;
