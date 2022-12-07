import React, { useState } from "react";
// import Logo from "../assets/logo.jpg";
import { Outlet, Link } from "react-router-dom";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
  FaLinkedinIn,
} from "react-icons/fa";

export const NavAlt = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  
  return (

      <div className="navPadding absolute w-full  high-z flex items-center   text-white">
    
        <div className="wrapper sm:hidden flex w-full items-center  justify-between  ">
        <img src={ GreenSquareLogo}  className="w-2/12 sm:hidden "  ></img>
        <div className="w-10/12 flex  justify-between pl-20 " >
          <ul className="sm:hidden md:flex ">
            <Link   to="/employee-guide">
              <li>
                <p className="text-2xl">How It Works</p>
              </li>
            </Link>
          </ul>
          <ul className="sm:hidden md:flex ">
            <Link to="/browse-jobs">
              <li>
                <p className="text-2xl"> Browse Jobs</p>
              </li>
            </Link>
          </ul>
          <ul className="sm:hidden md:flex ">
            <Link to="/browse-jobs">
              <li>
                <p className="text-2xl"> Dashboard</p>
              </li>
            </Link>
          </ul>
          <ul className="sm:hidden md:flex ">
            <Link to="/browse-jobs">
              <li>
                <p className="text-2xl">Plans and pricing</p>
              </li>
            </Link>
          </ul>
          <ul className="sm:hidden md:flex ">
            <Link to="/browse-jobs">
              <li>
                <p className="text-2xl"> Browse Jobs</p>
              </li>
            </Link>
          </ul>
        </div>
        </div>
        {/* Hamburger */}
        <div className=" h-auto w-auto relative  "  >
        <div
          onClick={handleClick}
          className="md:hidden z-1000  flex justify-between w-full  items-center px-7"
        >
          <img src={ GreenSquareLogo} className="w-4/12"  ></img>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
       
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute  right-0  z-10  left-0 w-11/12 mx-auto rounded-sm  text-[#69C080] bg-slate-200 flex flex-col   justify-center px-5"
          }
          >  <div className="py-1" >
          <Link   to="/employee-guide">
              <li>
                <p className="text-xl">How It Works</p>
              </li>
            </Link>
    
      
            <Link to="/browse-jobs">
              <li>
                <p className="text-xl"> Browse Jobs</p>
              </li>
            </Link>

        
            <Link to="/browse-jobs">
              <li>
                <p className="text-xl"> Dashboard</p>
              </li>
            </Link>
         

            <Link to="/browse-jobs">
              <li>
                <p className="text-xl">Plans and pricing</p>
              </li>
            </Link>
    
    
            <Link to="/browse-jobs"  >
              <li>
                <p className="text-xl"> Browse Jobs</p>
              </li>
            </Link>
            </div>

        </ul>

        {/* ends here */}
      </div>
    </div>
   
  );
};

export default NavAlt;
