import React from "react";
import { Link } from "react-router-dom";
import Data from "../../utils/Data";
import ScheduleImage from "../../img/people_office.jpg";

const BusinessContinuity = () => {
  return (
    <div className="container mx-auto md:px-28">
      <div className="flex flex-col mx-auto">
        <h4 className="font-bold text-5xl uppercase text-center mb-6 dark:text-gray-500">
          business continuity plan
        </h4>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          Preparing a plan/document that outlines how a business will continue
          operating during an unplanned disruption in service is crucial for all
          business. It’s more comprehensive than a disaster recovery plan
        </p>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          Under this service group, we help in outlining contingencies for
          business processes, assets, human resources, business partners and
          every aspect of the business that might be affected.
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
              business continuity plan
            </h2>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Preparing a plan/document that outlines how a business will
              continue operating during an unplanned disruption in service is
              crucial for all business.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Business Continuity is the intended outcome of proper execution of
              Business continuity planning and Disaster recovery. It is the
              payoff for cost-effective buying of spare machines and servers,
              performing backups and bringing them off-site, assigning
              responsibility, performing drills, educating employees and being
              vigilant.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Businesses are prone to a host of disasters that vary in degree
              from minor to catastrophic. Business continuity planning is
              typically meant to help a company continue operating in the event
              of major disasters such as fires.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              It’s more comprehensive than a disaster recovery plan and contains
              contingencies for business processes, assets, human resources and
              business partners – every aspect of the business that might be
              affected.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              It provides detailed strategies on how business operations can be
              maintained for both short-term and long-term outages which can
              include:
            </p>
            <div>
              {Data.continuity.map((schedule) => {
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

export default BusinessContinuity;
