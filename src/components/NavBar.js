import React, { useState } from "react";
import companyLogo from "../img/logo.png";
import { Link } from "react-router-dom";
import ToggleMode from "./DarkMode/ToggleMode";
import {HarmburgerIcon } from "./icons";


const NavBar = () => {
  // const btn = document.getElementById('menu-btn')
  // const nav = document.getElementById('menu')

  // btn.addEventListener('click', () =>{
  //     nav.classList.toggle('flex')
  //     nav.classList.toggle('hidden')
  // })

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="relative container mx-auto dark:text-gray-500">
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
            <Link to="/services" className="nav-items">
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
            onClick={handleOpen}
            className="block hamburger md:hidden focus:outline-none"
          >
            <HarmburgerIcon />
          </button>
        </div>
        {open === true && (
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
    </div>
  );
};

export default NavBar;
