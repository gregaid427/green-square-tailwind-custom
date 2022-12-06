import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
import JobContainer from "./../../Components/Containers/job-container.components";
import smilingMan from "./../../Assets/images/smiling-young-african-man-sitting-coworking-chatting-by-phone.png";
import OurTrackRecord from "../../Components/Containers/Sections/our-track-record.component";
import TakeControlComponent from "../../Components/Containers/Sections/take-control.component";
import EmployeeTestimonialComponent from "../../Components/Containers/Sections/employee-testimonial.component";
import PopularCategory from "../../Components/Containers/Sections/popular-categories.component";
import { UserContext } from "../../Context/auth.context";

function CarouselInformation() {
  return (
    <>
      <div
        className="carousel-caption float-start text-start"
        style={{ top: "20vh" }}
      >
        <h1 className="display-4 text-lign-at-center col-md-5  fw-semibold">
        Find your 
          dream job 
          today.
        </h1>
        <div className="btn-align-center">
        <Link to={"/browse-jobs"} className="btn  btn-success">
        APPLY FOR JOBS
        </Link>
        </div>
      </div>
    </>
  );
}

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
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div
          className="carousel-inner d-flex align-items-center justify-content-start"
          style={{ marginTop: "-16vh" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-item active">
            <img
              src={smilingMan}
              style={{ width: "100%", minHeight: "100%" }}
              alt="Sunset Over the City"
            />
            <CarouselInformation />
          </div>

          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
              style={{ width: "100%", minHeight: "100%" }}
              alt="Canyon at Nigh"
            />
            <CarouselInformation />
          </div>

          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              style={{ width: "100%", minHeight: "100%" }}
              alt="Cliff Above a Stormy Sea"
            />
            <CarouselInformation />
          </div>
        </div>
      </div>

      <div className="bg-light rounded-3 p-3 text-center">
        <div className="container-fluid py-5">
          <h2 className="display-5 fw-bold">The smartest way to job search.</h2>
          <p className="">
            With Green Square, finding the right candidate has never been
            easier.
          </p>

          <div className="bg-light text-left">
            <div className="container py-2">
              <div className="d-none d-md-block d-lg-block">
                <div className="input-group d-flex mb-2 gap-3">
                  <input
                    type="text"
                    className="form-control bg-white border-0 fw-bold search-input text-center"
                    placeholder="Job title or keyword"
                    aria-label=""
                    
                  />
                  <input
                    type="text"
                    className="form-control bg-white border-0 fw-bold search-input text-center"
                    placeholder="Location"
                    aria-label=""
                  />
                  <select
                    className="form-select fw-bold bg-white border-0 search-input text-center"
                    aria-label="Default select example"
                  >
                    <option selected>All Categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button
                    type="button"
                    className=" search-input fw-bold btn btn-success"
                  >
                    Search Jobs
                  </button>
                </div>
              </div>

              <div className="d-sm-block d-md-none d-lg-none">
                <div className="d-grid gap-3">
                  <input
                    type="text"
                    className="form-control bg-white border-0 text-center"
                    placeholder="Job Title, Skill, Industry"
                    aria-label="Username"
                  />
                  <input
                    type="text"
                    className="form-control bg-white border-0 text-center"
                    placeholder="City, State or Zip"
                    aria-label="Username"
                  />
                  <select
                    className="form-select bg-white border-0"
                    aria-label="Default select example"
                  >
                    <option selected>All Categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button type="button" className=" btn btn-success">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopularCategory background="bg-white" cardBackground="bg-light" />

      <div className="bg-light rounded-3 p-3" style={{ minHeight: "20vh" }}>
        <div className="d-grid container gap-3 py-5">
          <h3 className="display-5 fw-semibold text-center">Featured Jobs</h3>
          {jobs.length > 0 ? (
            <>
              {jobs &&
                jobs.slice(0, 4).map((job, index) => (
                  <Link
                    className="text-decoration-none text-black"
                    to="/job-details"
                    state={job}
                    key={index}
                  >
                    <JobContainer
                      backgroundColor={"bg-white"}
                      job={job}
                      className="col-12 col-md-6"
                      showImages={true}
                    />
                  </Link>
                ))}
            </>
          ) : (
            <p className="text-center">No jobs found.</p>
          )}
        </div>
      </div>

      <OurTrackRecord />

      <EmployeeTestimonialComponent />
      {!user ? (
        <TakeControlComponent register="/job-seeker-signup" signin="/login" />
      ) : null}

      <Footer></Footer>
    </>
  );
}

export default GuidePage;













