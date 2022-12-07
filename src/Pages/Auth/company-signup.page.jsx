
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import LoadingModal from "../../Components/Modal/loading-modal.component";
import Background from "./../../Assets/images/bg2.jpg";

function CompanySignup(props) {
  props.setShowNavBar(false);
  let navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // show loading modal
    setLoadingModalIsOpen(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: companyName,
      managerFirstName: lastName,
      managerLastName: firstName,
      email: email,
      contact: phoneNumber,
      password: password,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/register-company`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoadingModalIsOpen(false);

        if ("errors" in result) {
          alert(result.errors.number);
        } else {
          if (result.success) {
            // hide the modal
            navigate(`/login`);
          } else {
            // alert(result.message);
          }
        }
        return;
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
    <div
      className={`justify-center   bg-no-repeat bg-cover bg-center md:h-screen sm:h-max
  
  
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
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className=" flex flex-col   gap-2 ">
                  <h4 className="text-2xl mb-2 font-bold text-center text-[#69C080] ">
                    Sign Up
                  </h4>
                  <div className="flex justify-between flex-col">
                      <input
                    type="text"
                        required
                        placeholder="Company Name"
                        className="w-full p-2 text-center text-xl font-semibold text-black bg-slate-200  "
                        name=""
                      />
                    </div>
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
                    className="text-xl mt-3 w-full py-2 bg-[#FFBE24]  cursor-pointer font-bold text-white"
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
        text={"Creating company account."}
      /> */}
    </>
  );
}

export default CompanySignup;
