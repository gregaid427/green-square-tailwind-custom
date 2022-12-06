import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
import JobContainer from "./../../Components/Containers/job-container.components";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import { UserContext } from "../../Context/auth.context";

function JobsPostedByCompany(props) {
  props.setShowNavBar(true);
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  const [jobs, setJobs] = useState([]);

  // use context
  const { user } = useContext(UserContext);
  let company_id = user.company.company_id;

  // let company_id = `636d024e71c76e2a8c6f9725`;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    console.log(`${process.env.REACT_APP_HOST}/jobs/company/${company_id}`);

    fetch(
      `${process.env.REACT_APP_HOST}/jobs/company/${company_id}`,
      requestOptions
    )
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
  }, [company_id]);

  return (
    <>
      <div className="bg-light rounded-3 p-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-6">
              <h1 className="display-4">
                <span className="text-success">CompanyName,</span>
                <br />
                Posted Jobs
              </h1>
            </div>
            <div className="col-6">
              <div className="card float-end" style={{ width: "15rem" }}>
                <div className="card-body">
                  <h3 className="display-6">
                    <span style={{ fontSize: "14px" }} className="">
                      GHS
                    </span>{" "}
                    <span>25.00</span>
                  </h3>
                  <div className="d-flex gap-3">
                    <span>Available Credit</span>
                    <Link to="#" className="text-success">
                      Top Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5" style={{ minHeight: "40vh" }}>
        <div className="d-flex justify-content-between row gx-4">
          {jobs && jobs.length > 0 ? (
            <>
              {jobs &&
                jobs.map((job) => (
                  <Link
                    className="text-decoration-none text-black"
                    to="/job-details"
                    state={job}
                  >
                    <JobContainer
                      job={job}
                      hasApplied={true}
                      showAdminOptions={true}
                      className="col-12 col-md-6"
                    />
                  </Link>
                ))}
            </>
          ) : (
            <>
              <p className="text-center">Found no posted jobs</p>
            </>
          )}
        </div>
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default JobsPostedByCompany;
