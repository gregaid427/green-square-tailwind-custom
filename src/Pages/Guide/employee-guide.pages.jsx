import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
// import JobContainer from "./../../Components/Containers/job-container.components";
import smilingMan from "./../../Assets/images/smiling-young-african-man-sitting-coworking-chatting-by-phone.png";
// import OurTrackRecord from "../../Components/Containers/Sections/our-track-record.component";
// import TakeControlComponent from "../../Components/Containers/Sections/take-control.component";
// import EmployeeTestimonialComponent from "../../Components/Containers/Sections/employee-testimonial.component";
// import PopularCategory from "../../Components/Containers/Sections/popular-categories.component";
import { UserContext } from "../../Context/auth.context";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-04.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-02.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-03.svg";
import SmilingWoman from "./../../Assets/images/testimon1.jpg";
import SmilingMan from "./../../Assets/images/smiling_man.jpg";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { FaQuoteLeft } from "react-icons/fa";

function GuidePage(props) {
  const { user } = useContext(UserContext);

  props.setShowNavBar(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/jobs`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          console.log(result.jobs);
          setJobs(result.jobs);
        }
      })
      .catch((error) => {
        console.log(error);
        // alert(error.message);
      });
  }, []);

  return (
    <>
      <div className="flex  flex-col py-12 items-center justify-center gap-2 bg-[#F2F2F2]  ">
        <h3 className="text-4xl text-center font-semibold ">
          The smartest way to job search.
        </h3>
        <h3 className="text-xl text-slate-600 text-center ">
          {" "}
          With Green Square, finding the right candidate has never been easier.
        </h3>
        <div className="flex gap-4  container items-center   justify-between ">
          {" "}
       
          <button
            className=" w-6/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2    rounded-md text-2xl mx-auto  text-center fw-bold bg-[#FFBE24] text-black"

            // onClick={(e) => setIsCompany(false)}
          >
            <Link to="/employee-guide w-6/12 "  className="text-black">SIGN IN</Link>
          </button>
        </div>
      </div>

      <div className="wrapper flex flex-col justify-center items-center md:gap-10 sm:gap-2 md:my-[60px] sm:my-10  ">
        <h3 className="text-5xl  ">How it works</h3>
        <div className="flex gap-5 w-full md:flex-row sm:flex-col">
          <div className="md:w-4/12 sm:w-12/12  how-it-works-img h-[600px] text-center py-3 px-5 ">
            <h3 className="font-semibold text-2xl ">Create your Job Post</h3>
            <h2 className=" text-md">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
          <div className="md:w-4/12 sm:w-12/12 how-it-works-img h-[600px] text-center py-3 px-5 ">
            <h3 className="font-semibold text-2xl ">Reach Top Candidates</h3>
            <h2 className=" text-md">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
          <div className="md:w-4/12 sm:w-12/12 how-it-works-img h-[600px] text-center py-3 px-5 ">
            <h3 className="font-semibold text-2xl ">
              Review Your Great Matches
            </h3>
            <h2 className="  text-md">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
        </div>{" "}
        <h3 className=" text-2xl font-semibold text-center ">
          {" "}
          It's that easy! Sign up today to take your employee search to the next
          level.
        </h3>
        <button
          className=" md:w-2/12 sm:w-6/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2 align-center  rounded-md text-xl mx-auto  text-center fw-bold bg-[#FFBE24] text-black"

          // onClick={(e) => setIsCompany(false)}
        >
          <Link to="/employee-guide w-6/12 ">LEARN MORE</Link>
        </button>
      </div>

      <div className="flex flex-col gap-12 py-8  bg-[#F2F2F2] ">
        <h3 className="text-4xl wrapper text-center ">
          Our Track Record Speaks for Itself
        </h3>
        <div className=" wrapper">
          <div className="flex md:flex-row sm:flex-col sm:gap-6  md:px-10 justify-around ">
            <div className="flex flex-col items-center justify-center ">
              <div style={{ height: "70px", width: "70px" }} className="m-auto">
                {" "}
                <IconPack2 fill="#ffc107" />
              </div>

              <h2 className="font-bold text-5xl text-[#69C080] ">913,415</h2>
              <h5 className="font-semibold text-xl">JOBS POSTED</h5>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div style={{ height: "70px", width: "70px" }} className="m-auto">
                {" "}
                <IconPack3 fill="#ffc107" />
              </div>
              <h2 className="font-bold text-5xl text-[#69C080] ">43,415</h2>
              <h5 className="font-semibold text-xl">CANDIDATES HIRED</h5>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div style={{ height: "70px", width: "70px" }} className="m-auto">
                {" "}
                <IconPack1 fill="#ffc107" />
              </div>
              <h2 className=" font-bold text-5xl text-[#69C080] ">3,415</h2>
              <h5 className="font-semibold text-xl ">COMPANIES HIRED</h5>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex bg-[#69C080]  md:flex-row sm:flex-col w-full justify-center items-center text-center my-auto ">
        <img src={SmilingWoman} className=" md:w-6/12 sm:12/12 " />
        <div className=" md:w-6/12 sm:12/12 flex flex-col gap-4  p-12 ">
          <FaQuoteLeft className="text-white text-5xl mx-auto"></FaQuoteLeft>
          <h3 className="text-xl ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <h5 className="font-semibold text-xl ">Employee Name</h5>
        </div>
      </div>
      <div className=" flex md:flex-row bg-[#FFBE24]  sm:flex-col-reverse  w-full justify-center items-center text-center my-auto ">
        <div className=" md:w-6/12 sm:12/12 flex flex-col gap-4 p-12 ">
          <FaQuoteLeft className="text-white text-5xl mx-auto"></FaQuoteLeft>
          <h3 className="text-xl ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <h5 className="font-semibold text-xl ">Employee Name</h5>
        </div>
        <img src={SmilingMan} className=" md:w-6/12 sm:12/12 " />
      </div>
      <div className="flex  flex-col py-12 items-center justify-center gap-2 bg-[#69C080]  ">
        <h3 className="text-4xl text-center font-semibold sm:font-normal sm:text-2xl py-4 text-white ">
          Your ideal candidate is just a click away
        </h3>

        <div className="flex gap-4  md:w-[400px] sm:w-full items-center sm:px-6  justify-center ">
          {" "}
          <button
            className=" w-6/12    md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2   rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold bg-[#000000] text-white"

            // onClick={(e) => setIsCompany(false)}
          >
            <Link to="/employee-guide w-6/12  " className="">
              POST A JOB
            </Link>
          </button>
          <button
            className=" w-6/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2   rounded-md md:text-2xl sm:text-xl mx-auto  text-center fw-bold bg-[#FFBE24] text-black"

            // onClick={(e) => setIsCompany(false)}
          >
            <Link to="/employee-guide w-6/12 ">BROWSE CVS</Link>
          </button>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default GuidePage;
