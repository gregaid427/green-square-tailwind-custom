import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import Suitcase from "./../../Assets/images/suitcase.png";

import { Link } from "react-router-dom";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";

function SchoolsList(props) {
  props.setShowNavBar(true);
  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState("");
  const [schools, setSchools] = useState([]);

  // use context
  // const { user } = useContext(UserContext);
  // let user_id = user.user.userId;d

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      // todo: Get api for fetching schools
      `${process.env.REACT_APP_HOST}/schools`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setSchools(result.schools);
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
            <span className="text-success"> Schools</span>
          </h1>

          <div className="d-none d-md-block d-lg-block">
            <div className="input-group d-flex mb-2 gap-3">
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="School Name"
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
                // onChange={(e) => setKeyword(e.target.value)}
              >
                <option selected>All Categories</option>
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
            Need more search options?
            <Link className="text-success" to="/advanced-search">
              Advanced Search
            </Link>
          </p>
        </div>
      </div>

      <div className="container py-5" style={{ minHeight: "40vh" }}>
        <div className="row">
          {schools && schools.length > 0 ? (
            <>
              {schools &&
                schools
                  // .filter((school) => {
                  //   return (
                  //     school.name.includes(keyword) ||
                  //     school.symbol.includes(keyword)
                  //   );
                  // })
                  .map((company) => (
                    <div className="col-12 col-sm-6 col-xl-3">
                      <Link
                        to={"/school-details"}
                        className={"text-decoration-none text-dark"}
                        state={company}
                      >
                        <div className="card mb-3">
                          <img
                            src={company.image ? company.image : Suitcase}
                            className="card-img-top img-fluid"
                            alt="..."
                          />

                          <div className="card-body bg-light">
                            <h6 className="card-title">{company.symbol}</h6>
                            <p className="card-text">
                              {company.location} Applicants from this school
                            </p>
                            <Link
                              to={"/browse-applicants"}
                              className="btn btn-success"
                            >
                              View Profiles
                            </Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
            </>
          ) : (
            <>
              <p className="text-center">Found no schools</p>
            </>
          )}
        </div>
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default SchoolsList;
