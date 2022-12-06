import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";

function ApplicantProfile({ applicant }) {
  // todo: use the applicant information received to
  // 1. Route to the view profile page for the applicant.
  // 2. Download CV.
  // 3. Send messages to the client.
  return (
    <>
      <div className="rounded-5 col-12 col-md-6 px-4 pt-4">
        <div className="row bg-light p-4">
          {applicant.resume ? (
            <>
              <div className="col-7">
                <h4 className="fw-bold text-capitalize">{applicant.name}</h4>
                <p className="m-0">
                  {applicant.resume.profession
                    ? applicant.resume.profession.positions[0].position
                    : "N/A"}
                </p>
                <p className="m-0">
                  {applicant.resume.education.highestLevelOfEeducation}
                </p>
                <p className="m-0">{`${applicant.residential_address.streetAddress}, ${applicant.residential_address.streetAddress}`}</p>
              </div>
            </>
          ) : (
            <>
              <div className="col-7">
                <h4 className="fw-bold text-capitalize">{applicant.name}</h4>
                <p className="m-0">N/A</p>
                <p className="m-0">N/A</p>
                {/* <p className="m-0">{`${applicant.residential_address.streetAddress}, ${applicant.residential_address.streetAddress}`}</p> */}
              </div>
            </>
          )}

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
      </div>
    </>
  );
}

function BrowseCVs(props) {
  props.setShowNavBar(true);
  // let navigate = useNavigate([]);

  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  // const [graduationYear, setGraduationYear] = useState("");
  const [applicants, setApplicants] = useState();

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
                placeholder="Job Title, Skill, Industry"
                // onChange={(e) => setKeyword(e.target.value)}
              />
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="Location"
                // onChange={(e) => setLocation(e.target.value)}
              />
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="Graduation Year"
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
                className="form-control search-input text-center"
                placeholder="Job Title, Skill, Industry"
                // onChange={(e) => setKeyword(e.target.value)}
              />
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="City, State or Zip"
                // onChange={(e) => setLocation(e.target.value)}
              />
              <input
                type="text"
                className="form-control search-input text-center"
                placeholder="Graduation Year"
                // onChange={(e) => setGraduationYear(e.target.value)}
              />
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

      <div className="container py-5" style={{ minHeight: "40vh" }}>
        <div className="d-flex justify-content-between row gx-4">
          {applicants && applicants.length > 0 ? (
            <>
              {applicants
                // .filter((applicant) => {
                //   return (
                //     applicant.role.includes(keyword) ||
                //     applicant.location.includes(location)
                //     // TODO: Add graduation year filter here later.
                //   );
                // })
                .map((applicant, index) => (
                  <ApplicantProfile key={index} applicant={applicant} />
                ))}
            </>
          ) : (
            <>
              <p className="text-center">No CVs found</p>
            </>
          )}
        </div>
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default BrowseCVs;
