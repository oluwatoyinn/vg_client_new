import React from "react";
import { Link } from "react-router-dom";
import Data from "../../utils/Data";
import ScheduleImage from "../../img/people_office.jpg";

const ConsultingServices = () => {
  return (
    <div className="container mx-auto md:px-28">
      <div className="flex flex-col mx-auto">
        <h4 className="font-bold md:text-5xl text-3xl uppercase text-center mb-6 dark:text-gray-500">
          consulting services
        </h4>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          Our consulting services focus on our clients' most critical issues and
          opportunities: strategy, advertising, tax-planning, organization,
          processes, business reconstruction, advanced analytics, corporate
          finance, mergers & acquisitions and sustainability across all
          industries and geographies.
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
            <h2 className="uppercase space-x-7 mb-4 md:text-2xl text-xl font-bold dark:text-gray-500">
              consulting services
            </h2>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              We have proven a multiplier effect from optimizing the sum of the
              parts, not just the individual pieces. We bring deep, handy
              expertise, but are known for our all-inclusive perception: we
              capture value across boundaries and between the silos of any
              organization.
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              We collaborate with our clients to deliver “results that stick.”
              Our consulting team provides customized learning experiences with
              real-world perspectives and the consulting services cut across:
            </p>
            <div>
              {Data.consultingAreas.map((schedule) => {
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

export default ConsultingServices;
