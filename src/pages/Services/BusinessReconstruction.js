import React from "react";
import { Link } from "react-router-dom";
import Data from "../../utils/Data";
import ScheduleImage from "../../img/people_office.jpg";

const BusinessReconstruction = () => {
  return (
    <div className="container mx-auto md:px-28">
      <div className="flex flex-col mx-auto p-3">
        <h4 className="font-bold md:text-5xl text-3xl tet uppercase text-center mb-6 dark:text-gray-500">
          business reconstruction
        </h4>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          Business owners should periodically assess how to improve financial
          results. Business reconstruction involve an action taken by a company
          to significantly modify the financial and operational aspects of the
          company, usually when the business is facing financial pressures.
        </p>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          Our service provides our clients with the ability to leverage their
          business strengths and significantly modify the operation of the
          company to avoid financial pressure.
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
            <h2 className="uppercase space-x-7 mb-4 mb:text-2xl text-xl font-bold dark:text-gray-500">
              business reconstruction
            </h2>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Business owners should periodically assess how to improve
              financial results. One course of action often considered is
              whether a business should be restructured in order to achieve
              required performance levels.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Before pursuing this strategy, a business restructuring plan
              should be thoroughly evaluated. Important discussion points will
              normally include why restructuring might be needed, what is
              required and how to implement the resulting strategies.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Financial and organizational restricting is important and few
              reason for restricting can be change in the strategy, lack of
              profits, reverse synergy and cash flow requirement
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Our business reconstruction process include but not limited to:
            </p>
            <div>
              {Data.reconstruction.map((schedule) => {
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

export default BusinessReconstruction;
