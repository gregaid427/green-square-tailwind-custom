import Footer from "../../Components/Footer/footer.component";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-20.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-22.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-21.svg";

import { Link } from "react-router-dom";

function EmployeeDashboardPage(props) {
  props.setShowNavBar(true);
  return (
    <>
      <div className="bg-light rounded-3 p-3">
      <div className="container ">
          <div className="row message-panel ">
            <div className="col-md-6 col-sm-12">
              <h1 className="display-4">
                Welcome,
                <br />
                <span className="text-success">Applicant Name</span>
              </h1>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="display-6">
                    <span style={{ fontSize: "14px" }} className="">
                      GHS
                    </span>{" "}
                    <span>25.00</span>
                  </h3>
                  <div className="d-flex gap-3">
                    <p>
                      <span style={{ fontSize: "18px" }}>Available Credit</span>
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontSize: "16px" }}>
                        <Link to="#" className="text-success">
                          Top Up
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 mb-5">
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
                      Jobs Applications
                      <Link className="text-success" to="/job-applications">
                        Review
                      </Link>
                    </div>
                  </li>
                  <li className="list-group-item d-flex gap-4 p-3">
                    <i
                      className="fa-solid fa-eye text-warning"
                      style={{ fontSize: "52px" }}
                    ></i>

                    <h3 className="display-5">2</h3>

                    <div className="d-grid">
                      Profile Views
                      <Link className="text-success" to="#">
                        View
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-8">
            <div className="text-center">
              <div className="row g-4">
              <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-companies"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Browse Companies</small>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-companies"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Edit Profile</small>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-companies"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Browse Companies</small>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-companies"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Browse Companies</small>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-companies"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Browse Companies</small>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-companies"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Browse Companies</small>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-companies"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Browse Companies</small>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 " style={{ Height: "10px" }}>
                  <Link to={"/browse-jobs"}>
                    <div  className="bg-light rounded-4 d-flex align-items-center flex-column justify-content-center border p-1">
                    
                     <IconPack1  ></IconPack1>
                        <small className="text-black">Browse Jobs</small>
                      </div>
                  
                  </Link>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/upload-cvs"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Edit Profile</small>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={"/browse-companies"}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                      <IconPack1></IconPack1>
                        <small className="text-black">Browse Companies</small>
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
                          style={{ fontSize: "52px" }}
                        ></i>
                        <small className="text-black">Messages</small>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <Link to={""}>
                    <div className="bg-light rounded-4 d-flex align-items-center justify-content-center border p-4">
                      <div className="d-grid" style={{ minHeight: "15vh" }}>
                        <i
                          className="dashboard-icon fa-solid fa-graduation-cap"
                          style={{ fontSize: "52px" }}
                        ></i>
                        <small className="text-black">Your Documents</small>
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
