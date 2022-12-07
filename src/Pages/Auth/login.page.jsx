import React, { useState, useContext } from "react";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { Link, useNavigate } from "react-router-dom";
// import LoadingModal from "../../Components/Modal/loading-modal.component";
// import { UserContext } from "../../Context/auth.context";
// import GoogleIcon from "@mui/icons-material/Google";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";
import Background from "./../../Assets/images/bg1.jpg";
import { ImGooglePlus, ImFacebook, ImLinkedin2 } from "react-icons/im";

function Login(props) {
  props.setShowNavBar(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [userType, setUserType] = useState("");
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);

  // use context
  // const { setUser, setIsCompany } = useContext(UserContext);
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
          // setUser(result);
          if (result.hasOwnProperty("user")) {
            // navigate to the user's dashboard
            console.log("/employee-guide");
            // setIsCompany(false);
            navigate(`/employee-guide`);
          } else {
            // navigate to the company's dashboard
            console.log("/company-guide");
            // setIsCompany(true);
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
        className={`justify-center  bg-no-repeat bg-cover bg-center md:h-screen sm:h-screen
    
    
    `}
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="wrapper mx-auto sm:pb-8 ">
          <div className="flex sm:justify-center md:justify-start ">
            {" "}
            <img src={GreenSquareLogo} className=" w-[200px]   " />
          </div>

          <h3 className="md:text-5xl text-center sm:text-4xl text-white">
            it all starts here.
          </h3>

          <div className="flex flex-row">
            <div className=" flex-col md:w-4/12 sm:w-12/12 mt-10  mx-auto    gap-3 rounded-md shadow-lg ">
              <div className="flex flex-col items-center justify-center "></div>

              <div className=" px-5 bg-white py-5 rounded-xl ">
                <form onSubmit={(e) => handleFormSubmit(e)}>
                  <div className=" flex flex-col   gap-2 ">
                    <h4 className="text-2xl mb-2 font-bold text-center text-[#69C080] ">
                      Log In
                    </h4>

                    <div className="flex justify-between flex-col ">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className=" w-full  p-2 text-center text-xl text-black font-semibold  bg-slate-200 "
                        name=""
                      />
                    </div>
                    <div className="flex justify-between flex-col">
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        className="w-full p-2 text-center text-xl font-semibold text-black bg-slate-200  "
                        name=""
                      />
                    </div>
           
                  

                    <input
                      className="text-xl mt-3 w-full py-2 bg-[#FFBE24] cursor-pointer font-bold text-white"
                      type="submit"
                      id=""
                      value="LOGIN"
                    />
                    
                    <div className="flex justify-between flex-col">
                    <label for="Label" className="flex justify-center ">
                        <span className="text-md font-light mr-2 ">
                          Forgot Password?
                        </span>
                        <Link to="/forgot-password">
                          {" "}
                          <span className="text-md font-light text-[#69C080] ">
                            Click here to reset{" "}
                          </span>
                        </Link>
                      </label>
                    </div>
                    <div className="flex justify-center flex-col">
                      <label for="Label" className="flex justify-center ">
                        <span className="text-md font-light mr-2 ">
                        Just heard about us? 
                        </span>
                        <Link to="/job-seeker-signup">
                          {" "}
                          <span className="text-md font-light text-[#69C080] ">
                          Sign Up
                          </span>
                        </Link>
                      </label>
                    </div>
                    
                    <div className="text-center flex items-center justify-center mx-auto md:gap-2 sm:gap-0 ">
                        <Link to="/login" className="  mx-2 display-8">
                          <ImGooglePlus
                            style={{ fontSize: 40, color: "#ffc40c " }}
                          />
                        </Link>
                        <Link to="/login" className="  mx-2 display-8 ">
                          <ImFacebook
                            style={{ fontSize: 30, color: "#ffc40c " }}
                          />
                        </Link>

                        <Link to="/login" className=" mx-2">
                          <ImLinkedin2
                            style={{ fontSize: 36, color: "#ffc40c " }}
                          />
                        </Link>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
