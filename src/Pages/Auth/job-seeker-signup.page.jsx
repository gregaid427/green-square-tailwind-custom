import React, { useState } from "react";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { Link, useNavigate } from "react-router-dom";
// import LoadingModal from "../../Components/Modal/loading-modal.component";
import Background from "./../../Assets/images/bg3.jpg";

function JobSeekerSignup(props) {
  props.setShowNavBar(false);
  let navigate = useNavigate();

  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // show loading modal
    setLoadingModalIsOpen(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: `${fname} ${lname}`,
      email: email,
      gender: "Male",
      number: number,
      password: password,
      role: role,
    });

    console.log(raw);
    console.log(`${process.env.REACT_APP_HOST}/register`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoadingModalIsOpen(false);
        let message = "";
        console.log(result);
        if ("errors" in result) {
          alert(result.errors.number);
        } else {
          message += result.message;

          if (result.email) {
            message += " " + result.email;
          }

          alert(message);
          if (result.success) {
            navigate(`/login`);
          }
        }
        return;
      })
      .catch((error) => {
        setLoadingModalIsOpen(false);
        alert(error.message);
      });
  };

  return (
    <>
      <div
        className={`justify-center  bg-no-repeat bg-cover bg-center md:h-screen sm:sm:h-max
    
    
    `}
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="wrapper mx-auto sm:pb-8 md:pb-[70px] ">
          <div className="flex sm:justify-center md:justify-start ">
            {" "}
            <img src={GreenSquareLogo} className=" w-[200px]   " />
          </div>

          <h3 className="md:text-5xl text-center sm:text-4xl text-white">
            it all starts here.
          </h3>

          <div className="flex flex-row">
            <div className=" flex-col md:w-4/12 sm:w-11/12 mt-2  mx-auto    gap-3 rounded-md shadow-lg ">
              <div className="flex flex-col items-center justify-center "></div>

              <div className=" px-5 bg-white py-5 rounded-xl ">
                <form onSubmit={(e) => handleFormSubmit(e)}>
                  <div className=" flex flex-col   gap-2 ">
                    <h4 className="text-2xl mb-2 font-bold text-center text-[#69C080] ">
                      Sign Up
                    </h4>
                    <div className="flex flex-wrap  ">
                      <div className="flex w-6/12 pr-1 justify-between flex-col ">
                        <input
                          type="email"
                          required
                          placeholder="Last Name"
                          className=" w-full py-2 px-1 text-center text-xl font-semibold text-black bg-slate-200 "
                          name=""
                        />
                      </div>
                      <div className="flex  w-6/12 pl-1 justify-between flex-col">
                        <input
                      type="text"
                          required
                          placeholder="First Name"
                          className="w-full py-2 px-1 text-center text-xl font-semibold text-black bg-slate-200  "
                          name=""
                        />
                      </div>
                    </div>
                    <div className="flex justify-between flex-col">
                        <input
                        type="text"
                          required
                          placeholder="Email Address"
                          className="w-full p-2 text-center text-xl font-semibold text-black bg-slate-200  "
                          name=""
                        />
                      </div>
                      <div className="flex justify-between flex-col">
                        <input
                      type="text"
                          required
                          placeholder="Phone Number"
                          className="w-full p-2 text-center text-xl font-semibold text-black bg-slate-200  "
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
                      className="text-xl mt-3 w-full py-2 bg-[#FFBE24] hover:bg-bg-[#FFBE23] cursor-pointer font-bold text-white"
                      type="submit"
                      id=""
                      value="SIGN UP"
                    />
                      <div className="flex justify-between flex-col">
                    <label for="Label" className="flex justify-center ">
                        <span className="text-md font-light mr-2 ">
                         Already Registered?
                        </span>
                        <Link to="/login">
                          {" "}
                          <span className="text-md font-light text-[#69C080] ">
                            Click here to log in{" "}
                          </span>
                        </Link>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <LoadingModal
isOpen={loadingModalIsOpen}
text={"Creating job seeker account."}
/> */}
    </>
  );
}

export default JobSeekerSignup;
