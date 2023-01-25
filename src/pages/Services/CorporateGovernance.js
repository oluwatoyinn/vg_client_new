import React from "react";
import { Link } from "react-router-dom";
import Data from "../../utils/Data";
import ScheduleImage from "../../img/people_office.jpg";

const CorporateGovernance = () => {
  return (
    <div className="container mx-auto md:px-28">
      <div className="flex flex-col mx-auto p-1">
        <h4 className="font-bold md:text-5xl text-2xl uppercase text-center mb-6 dark:text-gray-500">
          corporate governance structuring
        </h4>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          The pillars of successful corporate governance are: accountability,
          fairness, transparency, assurance, leadership and stakeholder
          management. All six are critical in successfully running an entity and
          forming solid professional relationships among its stakeholders which
          include board directors, managers, employees, customers, regulators
          and most importantly, shareholders.
        </p>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          Our corporate governance structuring is structured around the six
          pillars as stated above.
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
        <div className="mr-12 grayscale">
          <img src={ScheduleImage} alt="business-development" />
        </div>
        <div className="">
          <h3 className="uppercase border-b-2 border-red-500 space-x-7 mb-4 text-2xl font-bold text-gray-500 dark:text-gray-500 ">
            Services
          </h3>
          <div className="dark:text-gray-500">
            <h2 className="uppercase space-x-7 mb-4 md:text-2xl font-bold dark:text-gray-500">
              corporate governance structuring
            </h2>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              The corporate governance system by which an organization is
              directed and controlled. The structure specifies the distribution
              of rights and responsibilities among different stakeholders such
              as the board, managers or shareholders, and spells out the rules
              and procedures for decision-making in corporate affairs.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Good corporate governance requires an effective system of mutual
              checks and balances among the top corporate bodies.Our principles
              of good corporate governance are centralized around:
            </p>
            <div>
              {Data.governance.map((schedule) => {
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

export default CorporateGovernance;
