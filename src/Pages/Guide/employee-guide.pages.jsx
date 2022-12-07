import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
// import JobContainer from "./../../Components/Containers/job-container.components";
import smilingMan from "./../../Assets/images/smiling-young-african-man-sitting-coworking-chatting-by-phone.png";
import feature1 from "./../../Assets/images/feature1.png";
import feature2 from "./../../Assets/images/feature2.png";
import feature3 from "./../../Assets/images/feature5.png";
import feature4 from "./../../Assets/images/feature4.png";
import caro1 from "./../../Assets/images/african-american-business-woman-by-window.png";
import caro4 from "./../../Assets/images/smiling-young-african-man-sitting-coworking-chatting-by-phone.png";
import Carousel from "nuka-carousel";
// import OurTrackRecord from "../../Components/Containers/Sections/our-track-record.component";
// import TakeControlComponent from "../../Components/Containers/Sections/take-control.component";
// import EmployeeTestimonialComponent from "../../Components/Containers/Sections/employee-testimonial.component";
// import PopularCategory from "../../Components/Containers/Sections/popular-categories.component";
import { UserContext } from "../../Context/auth.context";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-04.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-02.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-03.svg";
import { ReactComponent as IconPack4 } from "./../../Assets/icons/Icons-01.svg";
import SmilingWoman from "./../../Assets/images/testimon1.jpg";
import SmilingMan from "./../../Assets/images/smiling_man.jpg";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { FaQuoteLeft } from "react-icons/fa";
import Nav1, { NavAlt } from "../../Components/NavBar/nav.component.alt";
import Nav from "../../Components/NavBar/nav.component";




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


  // minicarousel
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src={feature1} onDragStart={handleDragStart} role="presentation" />,
    <img src={feature1} onDragStart={handleDragStart} role="presentation" />,
    <img src={feature1} onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <>
      <NavAlt />

      <div className="relative">
        <Carousel
          className="low-z"
          wrapAround={true}
          withoutControls={true}
          autoplay={true}
          slidesToShow={1}
          speed={1000}
        >
          <img src={caro1} className="h-screen w-full z-0 " alt="" />
          {/* <img src={caro2} className="h-screen w-full z-0 " alt="" /> */}
          {/* <img src={caro3} className="h-screen w-full z-0 " alt="" /> */}
          <img src={caro4} className="h-screen w-full z-0 " alt="" />
        </Carousel>
        <div className="absolute wrapper text-white margNegative mx-auto left-0 right-0 high-z">
          {" "}
          <h2 className="md:text-6xl  md:font-bold sm:text-5xl sm:text-center  sm:font-bold ">
            Find your <br></br>
            dream job<br></br>
            today.
          </h2>
          <button
            className=" md:mt-2  md:px-4  sm:px-2 sm:mx-auto sm:flex     md:py-2 sm:p-2 mt-2   rounded-md text-2xl   text-center font-semibold bg-[#69C080]  text-white"

            // onClick={(e) => setIsCompany(false)}
          >
            <Link to="/employee-guide w-6/12 ">
              {" "}
              <p className="text-center flex mx-auto  uppercase">
                APPLY FOR JOBS
              </p>{" "}
            </Link>
          </button>{" "}
        </div>
      </div>

      <div className="flex  flex-col py-12 items-center justify-center gap-2 bg-[#F2F2F2]  ">
        <h3 className="text-4xl text-center font-semibold ">
          The smartest way to job search.
        </h3>
        <h3 className="text-xl text-slate-600 text-center ">
          {" "}
          With Green Square, finding the right candidate has never been easier.
        </h3>

        <div className="flex md:px-[130px] md:gap-2 sm:gap-1 w-full sm:flex-col md:flex-row   justify-between ">
          {" "}
          <input
            required
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="Job title or keyword"
            className="form-control border-0 sm:rounded-sm mx-5 md:w-3/12 sm:w-12/12 md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
            onChange={(e) => {
              // setEmail(e.target.value);
            }}
          />
          <input
            required
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="Location "
            className="form-control border-0 sm:rounded-sm mx-5 md:w-3/12 sm:w-12/12  md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
            onChange={(e) => {
              // setEmail(e.target.value);
            }}
          />
          <input
            required
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="[variable goes here] "
            className="form-control border-0 sm:rounded-sm mx-5 md:w-3/12 sm:w-12/12  md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2  text-xl text-center"
            onChange={(e) => {
              // setEmail(e.target.value);
            }}
          />
          <button
            className=" sm:rounded-sm  md:w-3/12 sm:w-12/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2    rounded-md text-2xl mx-auto  text-center fw-bold bg-[#69C080] text-white"

            // onClick={(e) => setIsCompany(false)}
          >
            <Link to="/employee-guide w-6/12 " className="text-white">
              SEARCH JOBS
            </Link>
          </button>
        </div>
      </div>

      <div className="wrapper flex flex-col justify-center items-center md:gap-10 sm:gap-2 md:my-[60px] sm:my-10  ">
        <h3 className="text-5xl  ">How it works</h3>





carousel goes here




        <button
          className=" md:w-2/12 sm:w-6/12   md:px-4  sm:px-2  md:py-2 sm:p-2 mt-2 align-center  rounded-md text-xl mx-auto  text-center fw-bold bg-[#FFBE24] text-black"

          // onClick={(e) => setIsCompany(false)}
        >
          <Link to="/employee-guide w-6/12 ">BROWSE JOBS</Link>
        </button>
      </div>

      <div className="flex flex-col w-full py-7 bg-[#F2F2F2]">
        <h3 className="text-4xl wrapper mt-5 mb-8 text-center ">
          Featured Jobs
        </h3>
        <div className="wrapper flex w-12/12 gap-3 flex-col ">
          <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
            <img
              src={feature1}
              className="md:w-4/12 sm:w-12/12 h-[250px]  "
            ></img>

            <div className="md:w-8/12 sm:w-12/12 sm:py-2   px-4  flex flex-col gap-5 md:my-auto ">
              <h3 className="text-xl ">
                Python Software Engineering Associate – Credit Technology
              </h3>
              <h4 className="text-md">London, England</h4>
              <h4 className="text-md">$100,000</h4>
              <h4 className="text-md">Full Time Role</h4>{" "}
              <div className=" flex md:flex-row relative sm:flex-col  md:justify-between sm:items-start">
                {" "}
                <div className="p-2 mb-2 flex gap-2 md:absolute  sm:mx-auto bottom-5 right-0   rounded-md bg-[#69C080] ">
                  <h4 className="  text-md text-white  ">
                    APPLY FOR THIS JOB{" "}
                  </h4>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
            <img
              src={feature2}
              className="md:w-4/12 sm:w-12/12  h-[250px] "
            ></img>

            <div className="md:w-8/12 sm:w-12/12 sm:py-2   px-4  flex flex-col gap-5 md:my-auto ">
              <h3 className="text-xl ">Associate Software Engineer Java</h3>
              <h4 className="text-md">London, England</h4>
              <h4 className="text-md">$100,000</h4>
              <h4 className="text-md">Full Time Role</h4>{" "}
              <div className=" flex md:flex-row sm:w-3/12  relative sm:flex-col md:justify-between ">
                {" "}
                <div className="p-2 mb-2 flex md:absolute bottom-5 right-0  gap-2 rounded-md float-right bg-[#FFBE24] ">
                  <IconPack4 fill="#000000" className="h-5 my-auto" />
                  <h4 className=" text-md  "> PRO</h4>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
            <img
              src={feature3}
              className="md:w-4/12 sm:w-12/12  h-[250px] "
            ></img>

            <div className="md:w-8/12 sm:w-12/12 sm:py-2   px-4  flex flex-col gap-5 md:my-auto ">
              <h3 className="text-xl ">Associate Software Engineer Java</h3>
              <h4 className="text-md">London, England</h4>
              <h4 className="text-md">$100,000</h4>
              <h4 className="text-md">Full Time Role</h4>{" "}
              <div className=" flex md:flex-row sm:w-3/12  relative sm:flex-col md:justify-between ">
                {" "}
                <div className="p-2 mb-2 flex md:absolute bottom-5 right-0  gap-2 rounded-md float-right bg-[#FFBE24] ">
                  <IconPack4 fill="#000000" className="h-5 my-auto" />
                  <h4 className=" text-md  "> PRO</h4>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-12/12 sm:w-12/12 flex sm:flex-col  bg-white ">
            <img
              src={feature4}
              className="md:w-4/12 sm:w-12/12  h-[250px] "
            ></img>

            <div className="md:w-8/12 sm:w-12/12 sm:py-2   px-4  flex flex-col gap-5 md:my-auto ">
              <h3 className="text-xl ">Associate Software Engineer Java</h3>
              <h4 className="text-md">London, England</h4>
              <h4 className="text-md">$100,000</h4>
              <h4 className="text-md">Full Time Role</h4>{" "}
              <div className=" flex md:flex-row sm:w-3/12  relative sm:flex-col md:justify-between ">
                {" "}
                <div className="p-2 mb-2 flex md:absolute bottom-5 right-0  gap-2 rounded-md float-right bg-[#FFBE24] ">
                  <IconPack4 fill="#000000" className="h-5 my-auto" />
                  <h4 className=" text-md  "> PRO</h4>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="flex flex-col gap-12 py-8  bg-white ">
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
        <h3 className="text-4xl text-center font-semibold sm:font-normal sm:text-3xl py-4 text-white ">
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
