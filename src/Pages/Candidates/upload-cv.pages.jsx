import React, { useState, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";

function UploadCV(props) {
  props.setShowNavBar(true);

  // use state form data.
  const [highestLevelOfEeducation, setHighestLevelOfEducation] = useState("");
  const [school, setSchool] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [extraCurricularActivities, setExtraCurricularActivities] =
    useState("");

  const [currentRole, setCurrentRole] = useState("");
  const [company, setCompany] = useState("");
  const [lifestyle, setLifeStyle] = useState("");

  // use context
  const { user } = useContext(UserContext);
  let user_id = "";
  if (user) {
    user_id = user.user.userId;
  }

  const handleJobSubmit = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      userId: user_id,
      resume: {
        education: {
          highestLevelOfEeducation: highestLevelOfEeducation,
          school: school,
          address: {
            country: country,
            region: region,
            streetAddress: streetAddress,
          },
          extraCurricularActivities: extraCurricularActivities.split(","),
          positions: [
            {
              position: "Code Master",
              "start-date": "2020-07-10",
              "end-date": "2022-07-10",
            },
          ],
        },
        profession: {
          currentRole: currentRole,
          company: company,
          positions: [
            {
              position: "Project Lead",
            },
          ],
          references: [
            {
              name: "Sam MoorHouse",
              contact: "sammoorhouse@turntabl.com",
            },
            {
              name: "Ibrahim Inusa",
              contact: "ibrahiminusa@turntabl.com",
            },
          ],
          certificates: [
            {
              imageUrl: "image_url",
              certificateLink: "certificate_link",
            },
          ],
          history: [
            {
              company: "Turntabl",
              isCurrentEmployer: true,
            },
          ],
        },
        lifestyle: {
          hobbies: lifestyle.split(","),
        },
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/resume/update`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
        alert(result.message);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="bg-light rounded-3 p-3">
        <div className="container py-4">
          <div className="row">
            <div className="col-6">
              <h1 className="display-4">
                <span className="text-success">Applicant Name</span>
                <br />
                Upload CV
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

      <p>TODO: Currently under developement</p>
      <div className="container">
        <form onSubmit={(e) => handleJobSubmit(e)}>
          <div className="row py-2">
            <h3>Education</h3>
            <div className="col-12 col-md-6 form-group">
              <input
                required
                type="text"
                name="highest-level-of-education"
                id="highest-level-of-education"
                placeholder="Highest Level Of Education"
                className="form-control text-center"
                onChange={(e) => setHighestLevelOfEducation(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                required
                type="text"
                name="school"
                placeholder="School"
                id="school"
                className="form-control text-center"
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
          </div>

          <div className="row py-2">
            <h3>School Address</h3>
            <div className="col-12 col-md-6 form-group">
              <input
                required
                type="text"
                name="country"
                placeholder="Country"
                id="country"
                className="form-control text-center"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                required
                type="text"
                name="region"
                placeholder="Region"
                id="region"
                className="form-control text-center"
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                required
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                id="streetAddress"
                className="form-control text-center"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                required
                type="text"
                name="extraCurricularActivities"
                id="extraCurricularActivities"
                placeholder="Extra Curricular Activities"
                className="form-control text-center"
                onChange={(e) => setExtraCurricularActivities(e.target.value)}
              />
            </div>
          </div>

          <div className="row py-2">
            <h3>Positions</h3>
          </div>

          <div className="row py-2">
            <h3>Professional Details</h3>
            <div className="col-12 col-md-6 form-group">
              <input
                required
                id="currentRole"
                name="currentRole"
                placeholder="Current Role"
                className="form-control text-center"
                onChange={(e) => setCurrentRole(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6 form-group">
              <input
                required
                id="company"
                name="company"
                placeholder="company"
                className="form-control text-center"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          <div className="row py-2">
            <h3>Lifestyle</h3>

            <div className="col-12">
              <input
                type="text"
                name="hobbies"
                id="hobbies"
                placeholder="hobbies"
                className="form-control text-center"
                onChange={(e) => setLifeStyle(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center p-3 text-center">
            <div className="d-grid gap-2">
              <div className="">
                <button
                  className="btn btn-warning btn-lg text-black"
                  type="submit"
                  style={{ width: "200px", marginRight: "5px" }}
                >
                  Save Draft
                </button>

                <button
                  className="btn btn-success btn-lg"
                  type="submit"
                  style={{ width: "200px", marginLeft: "5px" }}
                >
                  Publish CV
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
}

export default UploadCV;
