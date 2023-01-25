import React from "react";
import { Link } from "react-router-dom";
import Data from "../../utils/Data";
import ScheduleImage from "../../img/people_office.jpg";

const Training = () => {
  return (
    <div className="container mx-auto md:px-28">
      <div className="flex flex-col mx-auto">
        <h4 className="font-bold md:text-5xl text-4xl uppercase text-center mb-6 dark:text-gray-500">
          training
        </h4>
        <p className="mx-auto text-lg text-center mb-6 text-gray-500 dark:text-gray-500 md:text-base">
          Better training leads to better processes and Better Work, Workforce
          training is an indispensable way to keep your organization
          competitive, our team of expert specialize in training of
          organization, small business owner, employees etc.
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
              training
            </h2>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              Better training leads to better processes and Better Work,
              Workforce training is an indispensable way to keep your
              organization competitive, our team of expert specialize in
              training of organization, small business owner, employeesetc. to
              ensure standardization, Increasing organisational stability a nd
              flexibility, Economical use of resources, Increase in
              productivity, Better industrial relations, Reduced supervision and
              direction,
            </p>
            <p className="text-lg mb-6 text-gray-500 md:text-base">
              A development program brings all employees to a higher level so
              they all have similar skills and knowledge and we must agree
              training program allows you to strengthen those skills that each
              employee needs to improve, our team of expert also specialize in
              training for the success of small business enterprises in Nigeria.
              This helps reduce any weak links within the company who rely
              heavily on others to complete basic work tasks.
            </p>
            <p className="text-lg mb-6 text-gray-500">
              Our training expands to:
            </p>
            <div>
              {Data.training.map((schedule) => {
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

export default Training;
