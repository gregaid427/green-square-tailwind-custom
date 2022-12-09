import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";
import Nav from "../../Components/NavBar/nav.component";
import Header from "../../Components/header/header";

function PostJobsByCompany(props) {
  const { user } = useContext(UserContext);
  props.setShowNavBar(true);

  const [jobCategories, setJobCategories] = useState("");

  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [currency, setCurrency] = useState("");
  const [salary, setSalary] = useState("");
  const [mode, setMode] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [otherRequirements, setOtherRequirements] = useState("");
  const [category, setCategory] = useState();

  // useNavigate
  const navigate = useNavigate();

  const handleJobSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // todo:
    // Change to get company data from context.
    let company_id = user.company.company_id;

    var raw = JSON.stringify({
      positon: position,
      company: company_id,
      location: {
        country: country,
        region: region,
        streetAddres: "",
      },
      salary: {
        budget: salary,
        currency: currency,
        equity: false,
      },
      mode: mode,
      description: description,
      requirements: requirements,
      otherRequirements: otherRequirements,
      category: category,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_HOST}/companies/${company_id}/jobs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert(result.message);
        if (result.success) {
          navigate("/company-jobs");
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_HOST}/jobs/categories/get-all-categories`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setJobCategories(result.categories);
        }
      })
      .catch((error) => {
        console.log("Unable to fetch company data.");
      });
  }, []);

  return (
    <>
       <Nav />
      <Header title={"Company Name"} subtitle={"Post a job"} amount={"25.0"} />
      <div className="bg-light rounded-3 p-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-6">
              <h1 className="display-4">
                <span className="text-success">CompanyName,</span>
                <br />
                Post A Job
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
                    <Link
                      to="/plans-and-pricing-companies"
                      className="text-success"
                    >
                      Top Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <form onSubmit={(e) => handleJobSubmit(e)}>
          <div className="row p-5">
            <div className="col-12 col-md-6 form-group">
              <label
                htmlFor="job-title"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
              <input
                required
                type="text"
                name="job-title"
                id="job-title"
                className="form-control"
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6 form-group">
              <label
                htmlFor="work-mode"
                className="block text-sm font-medium text-gray-700"
              >
                Work Mode
              </label>
              <select
                required
                type="text"
                name="work-mode"
                id="work-mode"
                autoComplete="email"
                className="form-control"
                onChange={(e) => setMode(e.target.value)}
              >
                {/* Change this to the list of categories */}
                <option></option>
                <option value={"Office"}> Office</option>
                <option value={"Hybrid"}>Hybrid</option>
                <option value={"Remote"}>Remote</option>
              </select>
            </div>

            <div className="col-12 col-md-6 form-group">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                required
                type="text"
                name="country"
                id="country"
                className="form-control"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6 form-group">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                Region
              </label>
              <input
                required
                type="text"
                name="region"
                id="region"
                className="form-control"
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6 form-group">
              <label
                htmlFor="currency"
                className="block text-sm font-medium text-gray-700"
              >
                Currency
              </label>
              <select
                required
                type="text"
                name="currency"
                id="currency"
                autoComplete="email"
                className="form-control"
                onChange={(e) => setCurrency(e.target.value)}
              >
                {/* Change this to the list of categories */}
                <option></option>
                <option value={"$"}>USD</option>
                <option value={"£"}>Pound</option>
                <option value={"€"}>Euro</option>
                <option value={"₵"}>Cedi</option>
              </select>
            </div>

            <div className="col-12 col-md-6 form-group">
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-700"
              >
                Salary
              </label>
              <input
                required
                id="salary"
                name="salary"
                className="form-control"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6 form-group">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                required
                id="category"
                name="category"
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
              >
                {/* Change this to the list of categories */}
                <option></option>
                {jobCategories &&
                  jobCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-12">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Job Description
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                autoComplete="description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="col-12">
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-gray-700"
              >
                Job Requirements
              </label>
              <textarea
                type="text"
                name="requirements"
                id="requirements"
                autoComplete="requirements"
                className="form-control"
                onChange={(e) => setRequirements(e.target.value)}
              ></textarea>
            </div>

            <div className="col-12">
              <label
                htmlFor="otherRequirements"
                className="block text-sm font-medium text-gray-700"
              >
                Other Requirements
              </label>
              <textarea
                type="text"
                name="otherRequirements"
                id="otherRequirements"
                autoComplete="otherRequirements"
                className="form-control"
                onChange={(e) => setOtherRequirements(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center p-3 text-center">
            <div className="d-grid gap-2">
              <div className="">
                <button
                  className="btn btn-warning btn-lg"
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
                  Post Job
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

export default PostJobsByCompany;
