import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../img/logo.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram2 from "../img/instagram2.svg";
import linkedln from "../img/linkedIn.png";
import whatsapp from "../img/whatsapp.png";
import Data from "../utils/Data";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <section id="footer" className="bg-red-500 md:px-28">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Need to speak with a consultant ?
          </h2>
          <div className="flex justify-center md:justify-start pt-6">
            <Link
              to="/register"
              className="p-1 px-6 pt-2 text-red-500 rounded-full bg-white shadow-2xl hover:bg-gray-300 hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <div className="bg-gray-900 md:px-28">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div>
            <h2 className="text-center text-white text-3xl pb-3">Contact Us</h2>
            {Data.contactAddress.map((item) => {
              return (
                <div key={item.id} className="flex justify-between text-center">
                  {/* <img
                    className="w-12 h-10 flex-1"
                    src={item.img}
                    alt="address"
                  /> */}
                  <h3 className="text-white px-6 space-y-2 pt-3 text-clip">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; {year} All right reserved
            </div>
            <div>
              <img src={companyLogo} alt="logo" className="w-28" />
            </div>
            <div className="flex justify-center space-x-4">
              <Link to="/whatsapp">
                <img src={whatsapp} alt="facebook" className="h-8" />
              </Link>
              <Link to="/linkedln">
                <img src={linkedln} alt="linkedln" className="h-8" />
              </Link>
              <Link to="/facebook">
                <img src={facebook} alt="facebook" className="h-8" />
              </Link>
              <Link to="/twitter">
                <img src={twitter} alt="twitter" className="h-8" />
              </Link>
              <Link to="/instagram">
                <img src={instagram2} alt="instagram" className="h-8" />
              </Link>
            </div>
          </div>
          {/* list */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <Link to="/" className="nav-items">
                Home
              </Link>
              <Link to="/" className="nav-items">
                About Us
              </Link>
              <Link to="/services" className="nav-items">
                Services
              </Link>
              <Link to="blog" className="nav-items">
                Blog
              </Link>
              <Link to="contact" className="nav-items">
                Contact Us
              </Link>
            </div>
            {/* <div className="flex flex-col space-y-3 text-white">
             
            </div> */}
          </div>
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Subscribe to our newsletter"
                />
                <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-gray-400 focus:outline-none">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; {year} All right reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
