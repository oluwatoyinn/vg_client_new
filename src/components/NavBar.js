import React, { useState } from "react";
import companyLogo from "../img/logo.png";
import { Link } from "react-router-dom";
import ToggleMode from "./DarkMode/ToggleMode";
import { HarmburgerIcon } from "./icons";

const NavBar = () => {
  // const btn = document.getElementById('menu-btn')
  // const nav = document.getElementById('menu')

  // btn.addEventListener('click', () =>{
  //     nav.classList.toggle('flex')
  //     nav.classList.toggle('hidden')
  // })

  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenService = () => setOpenService(!openService);
  const handleCloseService = () => setOpenService(false);

  return (
    <div>
      <nav className="relative container mx-auto dark:text-gray-500 md:px-28">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2 cursor-pointer">
            <img src={companyLogo} alt="logo" className="w-48" />
          </div>
          {/* Menu Items */}
          <div className="md:flex space-x-6 hidden  ">
            <Link to="/" className="nav-items">
              Home
            </Link>
            <Link to="/about" className="nav-items">
              About Us
            </Link>
            <Link
              to="/services"
              className="nav-items"
              onMouseEnter={handleOpenService}
            >
              Services
            </Link>
            {/* <Link to="/career" className="nav-items">
              Career
            </Link> */}
            <Link to="/blog" className="nav-items">
              Blog
            </Link>
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
            className="block hamburger md:hidden focus:outline-none"
          >
            <HarmburgerIcon />
          </button>
        </div>
        {open && (
          <div>
            <div id="menu" className="mobile_menu">
              <Link to="/" className="nav-items">
                Home
              </Link>
              <Link to="/about" className="nav-items">
                About Us
              </Link>
              <Link to="/services" className="nav-items">
                Services
              </Link>
              <Link to="/career" className="nav-items">
                Career
              </Link>
              <Link to="/blog" className="nav-items">
                Blog
              </Link>
              <Link to="/contact" className="nav-items">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
      {openService && (
        <div onMouseLeave={handleCloseService}>
          <div className="container absolute mx-auto w-3/4 bg-white h-48 drop-shadow-lg rounded-md sm:w-auto sm:self-center left-6 right-6 dark:bg-gray-700">
            <div className="grid grid-cols-4 space-y-6 mx-10 my-10">
              <Link to="/tax" className="service-items pt-6">
                Tax Planning
              </Link>
              <Link to="/reconstruction" className="service-items">
                Business Reconstruction
              </Link>
              <Link to="/consulting" className="service-items">
                Consulting Services
              </Link>
              <Link to="/advisory" className="service-items">
                Business Development Advisory Services
              </Link>
            </div>
            <div className="grid grid-cols-4 mx-10">
              <Link to="/training" className="service-items">
                Training
              </Link>
              <Link to="/branding" className="service-items">
                Branding and Product Development
              </Link>
              <Link to="/continuity" className="service-items">
                Business Continuity Plan
              </Link>
              <Link to="/governance" className="service-items">
                Corporate Governance Structuring
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
