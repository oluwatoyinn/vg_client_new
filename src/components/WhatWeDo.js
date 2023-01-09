import React from "react";
import { Link } from "react-router-dom";
import Data from "../utils/Data";

const WhatWeDo = () => {
  return (
    <div>
      <section id="whatwedo">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row md:px-28">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold border-b-4 border-red-500 p-2 dark:text-gray-500">
              What we do ?
            </h1>
            <p className="max-w sm text-center text-gray-400 text-lg font-bold md:text-left">
              Our approach is client-centric, geared towards delivering
              customized business solutions
            </p>
            {Data.whatWeDo2.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                >
                  <div className="rounded-l-full bg-red-200 md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                        {item.id}
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden dark:text-gray-500">
                        {item.title1}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block dark:text-gray-500">
                      {item.title2}
                    </h3>
                    <p className="text-gray-500 max-w-md">{item.message}</p>
                    <div className="flex justify-center md:justify-end pt-6">
                      <Link
                        to={item.url}
                        className="p-1 px-6 pt-2 text-white rounded-full hover:bg-white hover:text-black bg-red-500"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            {Data.whatWeDo.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row pb-4"
                >
                  <div className="rounded-l-full bg-red-200 md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                        {item.id}
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden dark:text-gray-500">
                        {item.title1}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block dark:text-gray-500">
                      {item.title2}
                    </h3>
                    <p className="text-gray-500 max-w-md">{item.message}</p>
                    <div className="flex justify-center md:justify-end pt-6">
                      <Link
                        to={item.url}
                        className="p-1 px-6 pt-2 text-white rounded-full hover:bg-white hover:text-black bg-red-500"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
