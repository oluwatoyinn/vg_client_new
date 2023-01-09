import React from "react";
import { Link } from "react-router-dom";
import consultingImage from "../img/consulting.png";

const Slider = () => {
  return (
    <div>
      <section id="slider">
        <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0 md:px-28">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <p className="max-w-sm text-center text-gray-500 md:text-left">
              We are
            </p>
            <h1 className="max-w-md text-2xl font-bold text-center md:text-5xl md:text-left dark:text-gray-500">
              VG2R Business Development Solutions and Consulting LTD
            </h1>
            <p className="max-w-sm text-center text-gray-500 md:text-left">
              that provides invaluable business advisory and consulting services
              to ensure you achieve sustainable development in your business.
            </p>
            <div>
              <div className="flex justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="p-3 px-6 pt-2 text-white rounded-full hover:bg-white hover:text-black bg-red-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={consultingImage} alt="consulting" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
