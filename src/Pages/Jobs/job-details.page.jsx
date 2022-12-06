import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import JobDetailSection from "../../Components/Hero/job.component";
import Footer from "../../Components/Footer/footer.component";
import SmilingManWithLaptop from "../../Assets/images/african-american-man-working-laptop-writing-notebook-man-with-beard-sitting-cafe.jpeg";
import { UserContext } from "../../Context/auth.context";

import { Link } from "react-router-dom";
import RelatedJobs from "./job-list.component";

function DetailSection(props) {
  return (
    <>
      <div>
        <b className="mb-1">{props.title}</b>
        <p className="text-muted mb-0">
          Porttitor amet massa Done cporttitor dolor et nisl molestie ium
          feliscon lore ipsum dolor tfringilla. lorem lorem ipsum. ollcitudin
          est dolor time.
        </p>
        <ul>
          <li>lorem lorem ipsum ollcitudin est dolor time</li>
          <li>lorem lorem ipsum ollcitudin est dolor time</li>
          <li>lorem lorem ipsum ollcitudin est dolor time</li>
        </ul>
      </div>
    </>
  );
}

function JobDetails(props) {
  props.setShowNavBar(true);
  const location = useLocation();
  const data = location.state;
  let job_id = data._id;

  // useState
  const [job, setJob] = useState(null);

  // useNavigate
  const navigate = useNavigate();

  // Todo: change to user id saved in,.
  // use context
  let { user } = useContext(UserContext);
  let user_id = "";
  if (user && user.user) {
    user_id = user.user.user_id;
  }

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/jobs/${job_id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setJob(result.job);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [job_id]);

  const handleApplyToJob = (e) => {
    e.preventDefault();

    if (user_id === "") {
      alert("Please create an account to apply.");
      navigate("/job-seeker-signup");
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      jobId: job_id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_HOST}/users/${user_id}/apply-job`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log("Application successful.");
          alert(result.message);
          navigate(`/job-applications`);
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="bg-light rounded-3 text-left">
        <div className="container py-2">
          <JobDetailSection
            image={SmilingManWithLaptop}
            name={job && job.positon}
            company={job && job.company}
            location={job && `${job.location.country}, ${job.location.region}`}
          />
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-8">
            <div>
              <p>{job && job.description}</p>
              <hr />

              <div className="d-grid gap-4">
                <DetailSection title="Job Requirements" />
                <DetailSection title="Other Requirements" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card mb-4 p-3">
              <div className="card-body">
                <div className="text-center">
                  <h5 className="display-6 card-title">Job Details</h5>
                  <p className="card-subtitle text-muted mb-2">
                    {job && `${job.location.country} ${job.location.region}`}
                  </p>
                  <p className="card-subtitle text-muted mb-2">
                    {job && `${job.salary.currency}${job.salary.budget}`}
                  </p>
                  <p className="card-subtitle text-muted mb-2">
                    {job && job.mode}
                  </p>
                </div>
                <hr />
                <div className="d-flex gap-4">
                  <i
                    className="fa-solid fa-suitcase text-success"
                    style={{ fontSize: "56px" }}
                  ></i>
                  <div className="text-left">
                    <p className="text-muted mb-0">
                      X open positions at his company
                    </p>
                    <Link className="text-success" to={"/company-details"}>
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2">
              {/* todo convert this to a form */}
              <form onSubmit={(e) => handleApplyToJob(e)}>
                <div className="d-grid">
                  <input
                    value={"Apply Now"}
                    className="btn btn-success btn-lg"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light rounded-3 text-left">
        <div className="d-grid container gap-2 py-5">
          <h3 className="display-5 text-center">Related Jobs</h3>
          <RelatedJobs backgroundColor="white" />
        </div>
      </div>

      <div className="row" style={{ height: "40vh" }}>
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

export default JobDetails;
