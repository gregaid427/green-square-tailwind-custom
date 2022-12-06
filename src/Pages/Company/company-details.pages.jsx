import React from "react";
import { useLocation } from "react-router-dom";

import smilingWoman from "../../Assets/images/smiling_woman.jpeg";
import Footer from "../../Components/Footer/footer.component";
import Skyline from "../../Assets/images/skyline.jpeg";
import { Link } from "react-router-dom";
import SmilingWomanWithLaptop from "../../Assets/images/side-view-smiley-woman-working-with-laptop-office.jpeg";
import RelatedJobs from "../Jobs/job-list.component";

function CompanyDetails(props) {
  props.setShowNavBar(true);
  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState("");

  const company = useLocation().state;

  return (
    <>
      <div className="bg-light rounded-3">
        <img
          src={Skyline}
          className="img-fluid"
          alt="company_background"
          style={{ height: "35vh", width: "100vw" }}
        />
        <div
          className="container p-3"
          style={{ height: "30vh", width: "100vw" }}
        >
          <div className="row">
            <div className="col-3">
              <img
                src={smilingWoman}
                style={{ width: "250px", height: "250px" }}
                className="companyDetailsLogo rounded"
                alt="Beautiful Woman"
              />
            </div>
            <div className="col-9">
              <h2 className="display-4">{company && company.name}</h2>
              <small>24 Open Positions</small>
            </div>
            <div className="col-12 my-4">{company && company.bio}</div>
          </div>
        </div>
      </div>

      <div className="d-grid container gap-3 py-5">
        <h3 className="text-success display-6 mt-3">Job Listings</h3>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Filters</h5>
            <div className="d-flex gap-2">
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

        <>
          <RelatedJobs />
        </>
      </div>

      <div className="row" style={{ height: "50vh" }}>
        <div className="bg-success col-6 d-flex justify-content-center align-items-center p-5">
          <div>
            <h3 className="display-6 fw-bold text-white">
              Join the best <br />
              companies.
            </h3>

            <p className="fw-bold">
              View our list of the top <br />
              20 companies to work for.
            </p>

            <button type="button" className="btn btn-warning">
              Learn More
            </button>
          </div>
        </div>

        <div
          className="col-6"
          style={{
            backgroundImage: `url(${SmilingWomanWithLaptop})`,
            backgroundSize: `cover`,
          }}
        ></div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default CompanyDetails;
