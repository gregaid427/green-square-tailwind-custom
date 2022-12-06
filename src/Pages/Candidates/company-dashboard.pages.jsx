import Footer from "../../Components/Footer/footer.component";

import { Link } from "react-router-dom";

function EmployeeDashboardPage(props) {
  props.setShowNavBar(true);
  return (
    <>
      <div className="bg-light rounded-3 p-3">
        <div className="container py-4">
          <div className="row">
            <div className="col-6">
              <h1 className="display-4">
                Welcome,
                <br />
                <span className="text-success">CompanyName</span>
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

      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card rounded-4">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h3>Account Activity</h3>
                  </li>
                  <li className="list-group-item d-flex gap-4 p-3">
                    <i
                      className="fa-solid fa-suitcase text-warning"
                      style={{ fontSize: "52px" }}
                    ></i>

                    <h3 className="display-5">2</h3>

                    <div className="d-grid">
                      Jobs Posted
                      <Link className="text-success" to="/company-jobs">
                        View
                      </Link>
                    </div>
                  </li>
                  <li className="list-group-item d-flex gap-4 p-3">
                    <i
                      className="fa-solid fa-users text-warning"
                      style={{ fontSize: "52px" }}
                    ></i>

                    <h3 className="display-5">2</h3>

                    <div className="d-grid">
                      Jobs Views
                      <Link className="text-success" to="#">
                        View
                      </Link>
                    </div>
                  </li>
                  <li className="list-group-item d-flex gap-4 p-3">
                    <i
                      className="fa-solid fa-suitcase text-warning"
                      style={{ fontSize: "52px" }}
                    ></i>

                    <h3 className="display-5">2</h3>

                    <div className="d-grid">
                      Jobs Applicants
                      <Link className="text-success" to="#">
                        View
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8">
            <div className="container text-center">
              <div className="row g-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/post-a-job"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                        <i
                          className="dashboard-icon fa-solid fa-square-plus"
                          style={{ fontSize: "96px" }}
                        ></i>
                        <p className="text-black">Post a job</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/cvs"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                        <i
                          className="dashboard-icon fa-solid fa-file"
                          style={{ fontSize: "96px" }}
                        ></i>
                        <p className="text-black">Browse CVs</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"#"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                        <i
                          className="dashboard-icon fa-solid fa-user-pen"
                          style={{ fontSize: "96px" }}
                        ></i>
                        <p className="text-black">Edit Profile</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/company-jobs"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                        <i
                          className="dashboard-icon fa-solid fa-suitcase"
                          style={{ fontSize: "96px" }}
                        ></i>
                        <p className="text-black">View Jobs</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-schools"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                        <i
                          className="dashboard-icon fa-solid fa-graduation-cap"
                          style={{ fontSize: "96px" }}
                        ></i>
                        <p className="text-black">Browse Schools</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/messages"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                        <i
                          className="dashboard-icon fa-solid fa-envelope"
                          style={{ fontSize: "96px" }}
                        ></i>
                        <p className="text-black">Messages</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default EmployeeDashboardPage;
