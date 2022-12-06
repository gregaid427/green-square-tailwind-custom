import React, { useState, useContext } from "react";

import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { Link, useNavigate } from "react-router-dom";
// import LoadingModal from "../../Components/Modal/loading-modal.component";
// import { UserContext } from "../../Context/auth.context";
// import GoogleIcon from "@mui/icons-material/Google";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";

function Login(props) {
  props.setShowNavBar(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [userType, setUserType] = useState("");
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);

  // use context
  const { setUser, setIsCompany } = useContext(UserContext);
  console.log(process.env.REACT_APP_HOST);

  // useNavigate
  let navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // show loading modal
    setLoadingModalIsOpen(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    console.log(raw);
    // console.log(userType);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let endPoint = `${process.env.REACT_APP_HOST}/login`;
    
    // userType === "user"
    //   ? `${process.env.REACT_APP_HOST}/login`
    //   : `${process.env.REACT_APP_HOST}/company-login`;
    fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoadingModalIsOpen(false);
        console.log(result);
        if (result.success) {
          setUser(result);
          if (result.hasOwnProperty("user")) {
            // navigate to the user's dashboard
            console.log("/employee-guide");
            setIsCompany(false);
            navigate(`/employee-guide`);
          } else {
            // navigate to the company's dashboard
            console.log("/company-guide");
            setIsCompany(true);
            navigate(`/company-guide`);
          }
          // depending on result
          // true
        } else {
          console.log(result.message);
        }
      })
      .catch((error) => console.log("error", error));
  };
  

  return (
    <>
      <div
        id="homepage"
        className=""
        style={{  height: "100vh" }}
      >
        <nav className="navbar navbar-expand-lg  navbar-light transparent-nav">
          <div className="container  px-3">
            <a className="mx-auto navbar-brand" href="/">
              <img
                src={GreenSquareLogo}
                alt="Green Square Logo"
                style={{ height: "100px" }}
              />
            </a>
          </div>
        </nav>

        <div className=" choice-box  col-12 d-grid gap-2">
          <div>
            <h6 className="display-6 text-white">It all starts here.</h6>
          </div>

          <div className="row">
            <div className="offset-1 col-10 offset-md-4 col-md-4">
              <div className="card d-grid rounded-5 gap-2 border px-4  text-center">
                <h3 className="text-success display-6 text-center">Login</h3>{" "}
                <Form
                  className="d-grid gap-3"
                  onSubmit={(e) => handleFormSubmit(e)}
                >
                  <input
                    required
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    placeholder="Email Address"
                    className="form-control border-0 fw-bold text-center"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control border-0  fw-bold text-center"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <input
                    type="submit"
                    className="btn btn-warning text-white"
                    value="Log In"
                  />
                  <div className=" d-flex items-center justify-center">
                    <div className="text-center mx-auto gap-2">
                      <Link to="/login" className=" btn-white mx-2 display-8 ">
                        <GoogleIcon sx={{ fontSize: 40, color: "#ffc40c " }} />
                      </Link>
                      <Link to="/login" className=" btn-white mx-2 display-8">
                        <FacebookIcon
                          sx={{ fontSize: 40, color: "#ffc40c " }}
                        />
                      </Link>
                      <Link to="/login" className="btn-white mx-2">
                        <LinkedInIcon
                          sx={{ fontSize: 40, color: "#ffc40c " }}
                        />
                      </Link>
                    </div>
                  </div>

                  <Link to="/forgot-password">
                    <p className=" m-0">
                      {" "}
                      <span className=" text-success" style={{ fontSize: 20 }}>
                        {" "}
                        Forgot Password?{" "}
                      </span>
                    </p>
                  </Link>

                  <div className="gap-1 d-flex my-0 mx-auto">
                    <Link
                      to="/job-seeker-signup"
                      className="display- fw-semibold text-black"
                    >
                      <p className=" m-0">
                        {" "}
                        <span className=" " style={{ fontSize: 20 }}>
                          {" "}
                          Just heard about us?{" "}
                        </span>
                      </p>
                    </Link>{" "}
                    <Link to="/job-seeker-signup">
                      <p className=" m-0">
                        {" "}
                        <span
                          className=" text-success"
                          style={{ fontSize: 20 }}
                        >
                          Sign Up
                        </span>
                      </p>
                    </Link>{" "}
                    {/* or{" "}
                        <Link to="/company-signup" className="display-9 text-success">
                          company.
                        </Link> */}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <LoadingModal isOpen={loadingModalIsOpen} text={"Logging in."} /> */}
    </>
  );
}

export default Login;
