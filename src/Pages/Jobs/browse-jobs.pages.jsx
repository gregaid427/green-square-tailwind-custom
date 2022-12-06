import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobContainer from "./../../Components/Containers/job-container.components";
import Footer from "../../Components/Footer/footer.component";
import SmilingManWithLaptop from "./../../Assets/images/african-american-man-working-laptop-writing-notebook-man-with-beard-sitting-cafe.jpeg";
import PopularCategory from "../../Components/Containers/Sections/popular-categories.component";

export default function BrowseJobs(props) {
  // const search = useLocation().search;
  // const searchQueryCategory = new URLSearchParams(search).get("category");

  props.setShowNavBar(true);
  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/jobs`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
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
      <div className="bg-light rounded-3 text-left">
        <div className="d-grid container gap-2 py-3">
          <h1 className="display-4">
            Browse
            <span className="text-success"> Jobs</span>
          </h1>

          <div className="d-none d-md-block d-lg-block">
            <div className="input-group d-flex mb-2 gap-3">
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="Job title or keyword"
                aria-label=""
                // onChange={(e) => setKeyword(e.target.value)}
              />
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="Location"
                aria-label=""
                // onChange={(e) => setLocation(e.target.value)}
              />
              <select
                className="form-select search-input text-center"
                aria-label="Default select example"
              >
                <option defaultValue="1">All Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button
                type="button"
                className="search-input btn btn-success"
                onClick={(e) => {}}
              >
                Search Jobs
              </button>
            </div>
          </div>

          <div className="d-sm-block d-md-none d-lg-none">
            <div className="d-grid gap-3">
              <input
                type="text"
                className="form-control"
                placeholder="Job Title, Skill, Industry"
                aria-label="Username"
              />
              <input
                type="text"
                className="form-control"
                placeholder="City, State or Zip"
                aria-label="Username"
              />
              <select
                className="form-select"
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

          <p className="">
            Need more search options?{" "}
            <Link className="text-success" to="/advanced-search">
              Advanced Search
            </Link>
          </p>
        </div>
      </div>

      <div className="d-grid container gap-5 py-5">
        <div className="card">
          <div className="card-body p-3">
            <h5 className="card-title">Filters</h5>
            <div className="d-flex align-content-stretch flex-wrap gap-3">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Posted Anytime
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Location
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Salary
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employment Type
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{ minHeight: "30vh" }} className="">
          {jobs.length > 0 ? (
            <>
              {jobs &&
                jobs
                  // .filter((job) => {
                  //   return (
                  //     job.positon.includes(keyword) ||
                  //     job.description.includes(keyword) ||
                  //     job.category.toLowerCase() === searchQueryCategory
                  //     // Object.values(job.location).includes(location)
                  //   );
                  // })
                  .map((job, index) => (
                    <Link
                      className="text-decoration-none text-black"
                      to="/job-details"
                      state={job}
                      key={index}
                    >
                      <JobContainer job={job} className="col-12 col-md-6" />
                    </Link>
                  ))}
            </>
          ) : (
            <>
              <p className="text-center">No jobs found.</p>
            </>
          )}
        </div>
      </div>

      <PopularCategory background="bg-light" cardBackground="bg-white" />

      <div className="row" style={{ height: "60vh" }}>
        <div className="bg-success col-6 d-flex justify-content-center align-items-center p-5">
          <div>
            <h3 className="display-5 text-white">
              Put your best <br />
              foot forward.
            </h3>

            <p className="fw-bold">
              Best practice and advice <br />
              for creating the perfect CV
            </p>

            <button type="button" className="btn btn-warning">
              Learn More
            </button>
          </div>
        </div>

        <div
          className="col-6"
          style={{
            backgroundImage: `url(${SmilingManWithLaptop})`,
            backgroundSize: `cover`,
          }}
        ></div>
      </div>

      <Footer></Footer>
    </>
  );
}
