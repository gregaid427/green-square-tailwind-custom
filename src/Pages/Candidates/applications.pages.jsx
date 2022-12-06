import React, { useState, useContext, useEffect, useRef } from "react";
import Footer from "../../Components/Footer/footer.component";
import JobContainer from "./../../Components/Containers/job-container.components";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";
import { useJobServices } from "../../Context/jobs.context";

function JobApplications(props) {
  props.setShowNavBar(true);
  const { getAppliedJobs, appliedJobs } = useJobServices();
  let callAppliedJobs = useRef();
  callAppliedJobs = 0;

  useEffect(() => {
    if (callAppliedJobs === 0) {
      getAppliedJobs();
      callAppliedJobs++;
    }
  }, []);

  return (
    <>
      <div className="bg-light rounded-3 p-3">
        <div className="container py-4">
          <div className="row">
            <div className="col-6">
              <h1 className="display-4">
                <span className="text-success">Applicant Name</span>
                <br />
                Pending Responses
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

      <div className="container py-5">
        <div className="row">
          <div className="">
            {appliedJobs.map((job) => (
              <Link
                className="text-decoration-none text-black"
                to="/job-details"
                state={job}
              >
                <JobContainer
                  hasApplied={true}
                  job={job}
                  className="col-12 col-md-6"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default JobApplications;
