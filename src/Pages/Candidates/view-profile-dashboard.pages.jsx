import React, { useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import Suitcase from "./../../Assets/images/suitcase.png";
import ApplicantModel from "./../../Assets/images/applicant.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../Context/auth.context";

function ViewProfileDashboard(props) {
  props.setShowNavBar(true);
  const applicant = useLocation().state;
  const navigate = useNavigate();
  const [viewDetailedCV, setViewDetailedCV] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      {!viewDetailedCV ? (
        <>
          <div className="rounded-3 bg-light text-left">
            <div className="container py-3">
              <div className="row">
                <div className="col-12 col-md-4">
                  <img
                    style={{ height: "250px", width: "250px" }}
                    src={ApplicantModel ? ApplicantModel : Suitcase}
                    className="img-fluid rounded-5 d-flex align-items-center"
                    alt="company-logo"
                  />
                </div>
                <div className="col-12 col-md-8 d-grid gap-2 p-3">
                  <h3 className="display-6 text-success text-capitalize">
                    {applicant && applicant.name}
                  </h3>
                  <p className="text-muted m-0">
                    I'm an <b className="text-uppercase mb-1">N/A</b>
                  </p>
                  <p className="text-muted m-0">
                    I'm open to <b className="text-uppercase mb-1">N/A</b>
                  </p>
                  <p className="text-muted m-0">
                    I'm located in <b className="text-uppercase mb-1">N/A</b>
                  </p>
                  <p className="text-muted m-0">
                    I'm have a <b className="text-uppercase mb-1">N/A</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row g-4">
              <div
                className="col-12 col-md-4"
                onClick={(e) => {
                  setViewDetailedCV(true);
                }}
              >
                <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4 text-center">
                  <div className="d-grid gap-2">
                    <i
                      className="fa-solid fa-file-arrow-down"
                      style={{ fontSize: "128px" }}
                    ></i>
                    <p>View Details</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4" onClick={(e) => {}}>
                <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4 text-center">
                  <div className="d-grid gap-2">
                    <i
                      className="fa-solid fa-play"
                      style={{ fontSize: "128px" }}
                    ></i>
                    <p>Watch Profile Video</p>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-4"
                onClick={(e) => {
                  if (user && user.hasOwnProperty("company")) {
                    navigate("/messages");
                  } else {
                    alert("Please log in to send a message to this applicant.");
                    navigate("/login");
                  }
                }}
              >
                <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4 text-center">
                  <div className="d-grid gap-2">
                    <i
                      className="fa-solid fa-envelope"
                      style={{ fontSize: "128px" }}
                    ></i>
                    <p>Send Message</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-3 text-left">
          <div className="container py-3">
            <div className="row">
              <div className="col-12 col-md-4">
                <img
                  style={{ height: "250px", width: "250px" }}
                  src={ApplicantModel ? ApplicantModel : Suitcase}
                  className="img-fluid rounded-5 d-flex align-items-center"
                  alt="company-logo"
                />
              </div>
              <div className="col-12 col-md-8 d-grid gap-2 p-3">
                <h3 className="display-6 text-success text-capitalize">
                  {applicant && applicant.name}
                </h3>
                <b className="text-uppercase mb-1">
                  {
                    // applicant && applicant.resume.profession.positions[0].position
                    //   ? applicant.resume.profession.positions[0].position
                    //   :
                    "N/A"
                  }
                </b>

                <p className="text-muted mb-1">
                  Open to: Financial Consulting, Accounting, Auditing
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <div className="">
                <p>
                  <i className="fa-solid fa-phone text-success"></i>
                  {applicant && applicant.number}
                </p>
              </div>
              <div className="">
                <p>
                  <i className="fa-solid fa-envelope text-success"></i>
                  {applicant && applicant.email}
                </p>
              </div>
              <div className="">
                <p>
                  <i className="fa-solid fa-location-dot text-success"></i>
                  {/* {applicant &&
                  `${applicant.residential_address.streetAddress}, ${applicant.residential_address.streetAddress}`} */}
                  {"N/A"}
                </p>
              </div>
            </div>

            <hr />

            <div className="row">
              <b className="text-success text-uppercase mb-1">Education</b>
              <div className="row">
                <div className="col-12 col-md-3">
                  <b className="mb-1">University of Lorem</b>
                  <p className="text-muted">2008 - 2010</p>
                </div>
                <div className="col-12 col-md-9">
                  <b className="mb-1">Certificate/Degree Earned</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                    ollcitudin est dolor time.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-3">
                  <b className="mb-1">University of Lorem</b>
                  <p className="text-muted">2008 - 2010</p>
                </div>
                <div className="col-12 col-md-9">
                  <b className="mb-1">Certificate/Degree Earned</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                    ollcitudin est dolor time.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-3">
                  <b className="mb-1">University of Lorem</b>
                  <p className="text-muted">2008 - 2010</p>
                </div>
                <div className="col-12 col-md-9">
                  <b className="mb-1">Certificate/Degree Earned</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                    ollcitudin est dolor time.
                  </p>
                </div>
              </div>
            </div>

            <hr />

            <div className="row">
              <b className="text-success text-uppercase mb-1">
                WORK EXPERIENCE
              </b>
              <div className="row">
                <div className="col-12 col-md-3">
                  <b className="mb-1">Company Name</b>
                  <p className="text-muted">2008 - 2010</p>
                </div>
                <div className="col-12 col-md-9">
                  <b className="mb-1">Job Title Here</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                    ollcitudin est dolor time.
                  </p>
                  <ul>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-3">
                  <b className="mb-1">Company Name</b>
                  <p className="text-muted">2008 - 2010</p>
                </div>
                <div className="col-12 col-md-9">
                  <b className="mb-1">Job Title Here</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                    ollcitudin est dolor time.
                  </p>
                  <ul>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-3">
                  <b className="mb-1">Company Name</b>
                  <p className="text-muted">2008 - 2010</p>
                </div>
                <div className="col-12 col-md-9">
                  <b className="mb-1">Job Title Here</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla. lorem lorem ipsum.
                    ollcitudin est dolor time.
                  </p>
                  <ul>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                    <li>lorem lorem ipsum ollcitudin est dolor time</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <b className="text-success text-uppercase mb-1">
                SKILLS & ACHIEVEMENTS
              </b>
              <div className="row">
                <div className="col-12">
                  <b className="mb-1">Name of Skill/Achievement</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <b className="mb-1">Name of Skill/Achievement</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <b className="mb-1">Name of Skill/Achievement</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla.
                  </p>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <b className="text-success text-uppercase mb-1">
                HOBBIES & INTERESTS
              </b>

              <div className="row">
                <div className="col-12">
                  <b className="mb-1">Hobbies</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <b className="mb-1">Hobbies</b>
                  <p className="text-muted">
                    Porttitor amet massa Done cporttitor dolor et nisl molestie
                    ium feliscon lore ipsum dolor tfringilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <IdealCandidateSection /> */}

      <Footer></Footer>
    </>
  );
}

export default ViewProfileDashboard;
