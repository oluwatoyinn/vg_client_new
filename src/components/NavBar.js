import React, { useState } from "react";
import companyLogo from "../img/logo.png";
import { Link } from "react-router-dom";
import ToggleMode from "./DarkMode/ToggleMode";
import { HarmburgerIcon } from "./icons";
import Data from "../utils/Data";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <nav className="relative container mx-auto dark:text-gray-500 md:px-28">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2 cursor-pointer">
            <Link to="/">
              <img src={companyLogo} alt="logo" className="w-48" />
            </Link>
          </div>
          {/* Menu Items */}
          <div className="md:flex space-x-6 hidden  ">
            <Link to="/" className="nav-items">
              Home
            </Link>
            <Link to="/about" className="nav-items">
              About Us
            </Link>
            {Data.servicesLink.map((link) => (
              <div>
                <div className=" px-3 group">
                  <h1 className="nav-items">{link.name}</h1>
                  {link.submenu && (
                    <div>
                      <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                        <div className="py-3">
                          <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                        </div>
                        <div className="bg-white p-5 grid grid-cols-2 gap-4 drop-shadow-md">
                          {link.sublinks.map((navLink) => (
                            <div
                              className="hover:text-red-400 hover:border-red-500 text-base"
                              key={navLink.id}
                            >
                              <Link to={navLink.url}>{navLink.message}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* <Link to="/blog" className="nav-items">
              Blog
            </Link> */}
            <Link to="/contact" className="nav-items">
              Contact Us
            </Link>
          </div>
          <div>
            <ToggleMode />
          </div>
          <Link
            to="/register"
            className=" hidden md:block p-3 px-6 pt-2 text-white rounded-md hover:bg-white hover:text-black bg-red-500"
          >
            Register
          </Link>

          {/* Mobile Header */}

          <button
            id="menu-btn"
            // onMouseEnter={handleOpen}
            // onMouseLeave={handleClose}
            onClick={handleOpen}
            className="block hamburger md:hidden focus:outline-none mr-3"
          >
            <HarmburgerIcon />
          </button>
        </div>
        {open && (
          <div>
            <div id="menu" className="mobile_menu">
              <Link to="/" className="nav-items" onClick={handleClose}>
                Home
              </Link>
              <Link to="/about" className="nav-items" onClick={handleClose}>
                About Us
              </Link>
              {Data.servicesLink.map((link) => (
                <div>
                  <div className="group">
                    <h1
                      className="nav-items"
                      onClick={() =>
                        service !== link.name
                          ? setService(link.name)
                          : setService("")
                      }
                    >
                      {link.name}
                    </h1>
                    {link.submenu && (
                      <div>
                        <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                          <div className="py-3">
                            <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                          </div>
                          <div className="bg-white p-5 grid grid-cols-2 gap-4 drop-shadow-md">
                            {link.sublinks.map((navLink) => (
                              <div
                                className="hover:text-red-400 hover:border-red-500 text-base "
                                key={navLink.id}
                              >
                                <Link className="nav-items" to={navLink.url}>
                                  {navLink.message}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Mobile Services menu */}
                  <div
                    className={`${
                      service === link.name ? "md:hidden" : "hidden"
                    } `}
                  >
                    {link.sublinks.map((slink) => (
                      <div>
                        <div
                          className="py-4 pl-10 pr-5 md:pr-0 "
                          key={slink.id}
                        >
                          <Link onClick={handleClose} to={slink.url}>
                            {slink.message}{" "}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {/* <Link to="/blog" className="nav-items" onClick={handleClose}>
                Blog
              </Link> */}
              <Link to="/contact" className="nav-items" onClick={handleClose}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
