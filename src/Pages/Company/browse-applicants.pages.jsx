import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
// import applicant from "./../../Assets/images/applicant.jpeg";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";

function ApplicantProfile({ applicant }) {
  // todo: use the applicant information received to
  // 1. Route to the view profile page for the applicant.
  // 2. Download CV.
  // 3. Send messages to the client.
  return (
    <>
      <div className="bg-light col-12 col-md-6 row rounded-5 p-4">
        <div className="col-7">
          <h4 className="fw-bold text-capitalize">{applicant.name}</h4>
          {applicant.resume ? (
            <>
              <p className="m-0">
                {applicant.resume.profession.positions[0].position}
              </p>
              <p className="m-0">
                {applicant.resume.education.highestLevelOfEeducation}
              </p>
              <p className="m-0">{`${applicant.residential_address.streetAddress}, ${applicant.residential_address.streetAddress}`}</p>
            </>
          ) : null}
        </div>
        <div className="col-5 d-grid gap-2">
          <Link
            to={"/view-profile"}
            className="btn btn-sm btn-success text-uppercase"
            state={applicant}
          >
            View Profile
          </Link>
          <button className="btn btn-sm btn-success text-uppercase">
            Download CV
          </button>
          <Link
            to="/messages"
            className="btn btn-sm btn-success text-uppercase"
          >
            Send Message
          </Link>
        </div>
      </div>
    </>
  );
}

function BrowseSchoolApplicantCVs(props) {
  props.setShowNavBar(true);
  // let navigate = useNavigate([]);

  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  // const [graduationYear, setGraduationYear] = useState({});
  const [applicants, setApplicants] = useState();

  // todo: Change this to use company details stored in company context.
  // let company_id = `634d792004ad673bec8daa40`;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/users`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          console.log(result.users);
          setApplicants(result.users);
        }
      })
      .catch((error) => {
        // console.log(error);
        // alert(error.message);
      });
  }, []);

  return (
    <>
      <div className="bg-light rounded-3 text-left">
        <div className="d-grid container gap-2 py-3">
          <h1 className="display-4">
            Browse
            <span className="text-success"> CVs</span>
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
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="Graduation Year"
                aria-label=""
                // onChange={(e) => setGraduationYear(e.target.value)}
              />
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

      <div className="container py-5">
        <div className="row g-4">
          {applicants &&
            applicants.map((applicant) => (
              <ApplicantProfile applicant={applicant} />
            ))}
        </div>
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default BrowseSchoolApplicantCVs;
