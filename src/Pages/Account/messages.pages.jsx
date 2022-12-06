import Footer from "../../Components/Footer/footer.component";
import MessagingPane from "../../Components/Messages/message-recipient.component";

import { Link } from "react-router-dom";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-20.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-22.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-21.svg";
function MessageList(props) {
  props.setShowNavBar(true);

  let messages = [{}, {}, {}, {}, {}, {}];
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

      <div className="container py-3">
        <div className="card border">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 col-sm-12 ">
                <div
                  className="border-bottom message-box1  "
                  style={{ height: "40px" }}
                >
                  <div>
                    <h4>Messaging</h4>
                  </div>
                  {/* <div><h4>...</h4></div> */}
                  <div className="d-flex gap-2" >
                  <IconPack2 style={{ height: "40px" }}></IconPack2>
                  <IconPack3 style={{ height: "40px" ,stroke:"green" ,fill:"green" }}></IconPack3>
                </div>
                </div>

                <div className="border-bottom py-2">
                  <form>
                    <input
                      type="text"
                      className="form-control border-0 fw-bold"
                      placeholder="Search messages"
                    />
                  </form>
                </div>

                {messages.map((message, index) => (
                  <MessagingPane />
                ))}
              </div>
              <div
                className=" detailPane col-8 border-right d-flex justify-between border-start"
                style={{ position: "relative", flexDirection: "column" ,justifyContent:"space-between" }}
              >
                <div className="" >
                  <div className="border-bottom">
                    <h4>
                      <span className="fw-bold text-success">
                        Caroline Mensah{" "}
                      </span>
                    </h4>
                    <h6>
                      <span>Job Title or Role Title goes here </span>
                    </h6>
                    <br />
                  </div>

                  <div className="row p-3">
                    <div className="col-md-1">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "60px", height: "60px" }}
                        className="rounded-circle  "
                      />
                    </div>
                    <div className="col-md-11  ">
                      <div className="d-flex my-auto   justify-between">
                        <div className="d-flex gap-5 ">
                          {" "}
                          <h3>
                            <span className="d-flex fw-bold  "> John Doe</span>
                          </h3>{" "}
                          <h3>
                            <span className="d-flex display-8 "> 8:21am</span>
                          </h3>{" "}
                        </div>{" "}
                        {/* <div><h3 className="">8:21pm</h3>{" "}</div> */}
                      </div>
                      <p className="">
                        <span style={{ fontSize: "15px" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" px-3 py-2 " style={{ justifySelf: "end" }}>
                  <form className="d-flex gap-2"> 
                    <input
                      type="text"
                      className="form-control border-0 fw-bold"
                      placeholder="Type a message here..."
                    />
                     <IconPack1 style={{ height: "40px" }}></IconPack1>
                  </form>
                </div>

                {/* <div
                  className="d-grid align-content-between"
                  style={{ height: "94%" }}
                >
                  <div>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                        className="rounded-circle"
                      />

                      <div className="ms-3">
                        <p className="pt-2">
                          <div className="d-flex my-auto justify-between">
                            <div>
                              {" "}
                              <h3 className="d-flex my-auto">John Doe</h3>{" "}
                              <h5 className="d-flex my-auto">8:21pm</h5>{" "}
                            </div>{" "}
                            <h5 className="d-flex my-auto">8:21pm</h5>{" "}
                          </div>

                          <br />
                          <small className="text-muted mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message here..."
                      />
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default MessageList;
