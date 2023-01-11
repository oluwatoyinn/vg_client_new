import React from "react";
import Data from "../utils/Data";

const About = () => {
  return (
    <div className="container mx-auto md:px-28 pb-10">
      <h4 className="font-bold md:text-5xl text-3xl uppercase text-center mb-6 dark:text-gray-500">
        About the company
      </h4>
      <div className="grid grid-cols-2 gap-12 mt-8">
        <div className="flex flex-col">
          <div>
            <h3 className="font-bold md:text-2xl text-xl uppercase text-center mb-6 dark:text-gray-500">
              Vision
            </h3>
            <p className="text-center dark:text-gray-500">
              We are committed to achieving new standards of excellence by
              providing advisory services in a timely manner with improved
              stakeholders return.
            </p>
          </div>
          <div className="mt-6 mb-6">
            <h3 className="font-bold md:text-2xl text-xl uppercase text-center mb-6 dark:text-gray-500">
              Mission
            </h3>
            <p className="text-center dark:text-gray-500">
              To provide innovative and inspired solutions to businesses.
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="font-bold md:text-2xl text-base uppercase text-center mb-6 dark:text-gray-500">
            Our core values
          </h3>
          <div className="grid md:grid-cols-2">
            <div>
              {Data.coreValues1.map((value) => {
                return (
                  <div key={value.id} className="dot m-2">
                    <h3 className="pl-10 dark:text-gray-500">
                      {value.message}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div>
              {Data.coreValues2.map((value) => {
                return (
                  <div key={value.id} className="dot m-2">
                    <h3 className="pl-10 dark:text-gray-500">
                      {value.message}
                    </h3>
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

export default About;
