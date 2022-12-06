import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import Suitcase from "./../../Assets/images/suitcase.png";
import { Link } from "react-router-dom";
import SmilingWomanWithLaptop from "../../Assets/images/side-view-smiley-woman-working-with-laptop-office.jpeg";
// import { Category } from "@mui/icons-material";

function CompanyList(props) {
  props.setShowNavBar(true);
  const [companies, setCompanies] = useState([]);

  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  // const [category, setCategory] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_HOST}/companies?limit=40&page=1`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setCompanies(result.data);
      })
      .catch((error) => {
        console.log("Unable to fetch company data.");
      });
  }, []);

  return (
    <>
      <div className="bg-light rounded-3 text-left">
        <div className="d-grid container gap-2 py-3">
          <h1 className="display-4">
            Browse
            <span className="text-success"> Companies</span>
          </h1>

          <div className="d-none d-md-block d-lg-block">
            <div className="input-group d-flex mb-2 gap-3">
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="Company Name"
                // onChange={(e) => setKeyword(e.target.value)}
              />
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="Location"
                // onChange={(e) => setLocation(e.target.value)}
              />
              <select
                className="form-select search-input text-center"
                aria-label="Default select example"
                // onChange={(e) => setCategory(e.target.value)}
              >
                <option defaultValue={"1"}>All Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button type="button" className="search-input btn btn-success">
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
                <option defaultValue>All Categories</option>
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
            Need more search options?
            <Link className="text-success" to="/advanced-search">
              Advanced Search
            </Link>
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row" style={{ minHeight: "40vh" }}>
          {companies.length > 0 ? (
            <>
              {companies &&
                companies
                  // .filter((company) => {
                  //   // return (
                  //   //   // company.positon.includes(keyword) ||
                  //   //   // company.description.includes(keyword) ||
                  //   //   // Object.values(Category.location).includes(location) ||
                  //   //   // company.category === category
                  //   // );
                  // })
                  .map((company, index) => (
                    <>
                      {/* <p>{JSON.stringify(company.location)}</p> */}
                      {/* image name location */}
                      <div className="col-12 col-sm-6 col-xl-3" key={index}>
                        <Link
                          to={"/company-details"}
                          className={"text-decoration-none text-dark"}
                          state={company}
                        >
                          <div className="card mb-3">
                            <img
                              src={company.image ? company.image : Suitcase}
                              className="card-img-top img-fluid"
                              alt="..."
                            />

                            <div className="card-body bg-light p-1">
                              <h6 className="card-title text-capitalize">
                                {company.name}
                              </h6>
                              {company.location ? (
                                <>
                                  <p className="card-text text-uppercase m-0">
                                    {
                                      (company.location.country,
                                      company.location.region)
                                    }
                                  </p>
                                </>
                              ) : (
                                <>
                                  <p className="card-text m-0">N/A</p>
                                </>
                              )}
                              <Link
                                to={"/company-details"}
                                className="text-success p-0"
                              >
                                View Jobs
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  ))}
            </>
          ) : (
            <p className="text-center">No companies found.</p>
          )}
        </div>
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

export default CompanyList;
