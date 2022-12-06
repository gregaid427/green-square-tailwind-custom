import { useContext } from "react";
import { Link } from "react-router-dom";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import Background from "./../../Assets/images/background1.jpg";
// import { UserContext } from "../../Context/auth.context";
// import { color } from "@mui/system";

function Home(props) {
  //   props.setShowNavBar(false);
  //   const { setIsCompany } = useContext(UserContext);

  return (
    <><div className={`justify-center  bg-no-repeat bg-cover bg-center md:h-screen sm:h-max
    
    
       `} 
    style={{ backgroundImage: `url(${Background})`}} >
 


        <div className="wrapper mx-auto sm:pb-8 ">
          <div className="flex sm:justify-center md:justify-start " >  <img src={GreenSquareLogo} className=" w-[200px]   " /></div>
        
          <div className="  md:mt-[200px] sm:mt-20 " >
          <div className="flex justify-center flex-col items-center gap-7  my-auto ">
            <h3 className="md:text-7xl sm:text-5xl text-white">It all starts here.</h3>
            <div className="grid grid-cols-2 md:grid-flow-col md:w-7/12 sm:w-12/12 gap-3  sm:flex sm:flex-col">
              <div className="flex flex-col justify-between rounded-xl px-5 py-6 w-full row-span-1 bg-green-600 bg  content-center mx-auto  ">
                <h4
                  
                  className=" md:text-3xl sm:text-3xl text-center text-white"
                >
                  The career of <br /> your dreams.
                </h4>{" "}
                <Link  to="/employee-guide" >
                <div
                 
                  className=" justify-end w-8/12 md:p-3 sm:p-2 mt-2 align-bottom  rounded-md text-3xl mx-auto  text-center fw-bold bg-yellow-200 text-black"
                  
                  // onClick={(e) => setIsCompany(false)}
                >
                  JOB SEEKER
                </div>
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-xl px-5 py-6 w-full row-span-1 bg-green-600 bg  content-center mx-auto  ">
                <h4
                  
                  className="md:text-3xl sm:text-3xl text-4xl text-center text-white"
                >
                 The team you've been<br></br>searching for
                </h4>{" "}
                <Link to="/employee-guide" >
                <div
             
                  className=" justify-end w-8/12 md:p-3 sm:p-2 p-4 mt-2 align-bottom  rounded-md text-3xl mx-auto  text-center fw-bold bg-yellow-200 text-black"
                  
                // onClick={(e) => setIsCompany(true)}
                >
                  JOB SEEKER
                </div>
                </Link>
              </div>
          
            </div>
          </div>
          </div>
        </div>


</div>
    
    </>
  );
}

export default Home;
