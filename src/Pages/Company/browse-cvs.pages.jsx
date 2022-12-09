import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link } from "react-router-dom";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import Nav from "../../Components/NavBar/nav.component";
import SmilingWoman from "./../../Assets/images/applicant.jpeg";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-11.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-17.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-13.svg";

// function ApplicantProfile({ applicant }) {
//   // todo: use the applicant information received to
//   // 1. Route to the view profile page for the applicant.
//   // 2. Download CV.
//   // 3. Send messages to the client.
//   return (
//     <>
//       <div className="rounded-5 col-12 col-md-6 px-4 pt-4">
//         <div className="row bg-light p-4">
//           {applicant.resume ? (
//             <>
//               <div className="col-7">
//                 <h4 className="fw-bold text-capitalize">{applicant.name}</h4>
//                 <p className="m-0">
//                   {applicant.resume.profession
//                     ? applicant.resume.profession.positions[0].position
//                     : "N/A"}
//                 </p>
//                 <p className="m-0">
//                   {applicant.resume.education.highestLevelOfEeducation}
//                 </p>
//                 <p className="m-0">{`${applicant.residential_address.streetAddress}, ${applicant.residential_address.streetAddress}`}</p>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="col-7">
//                 <h4 className="fw-bold text-capitalize">{applicant.name}</h4>
//                 <p className="m-0">N/A</p>
//                 <p className="m-0">N/A</p>
//                 {/* <p className="m-0">{`${applicant.residential_address.streetAddress}, ${applicant.residential_address.streetAddress}`}</p> */}
//               </div>
//             </>
//           )}

//           <div className="col-5 d-grid gap-2">
//             <Link
//               to={"/view-profile"}
//               className="btn btn-sm btn-success text-uppercase"
//               state={applicant}
//             >
//               View Profile
//             </Link>
//             <button className="btn btn-sm btn-success text-uppercase">
//               Download CV
//             </button>
//             <Link
//               to="/messages"
//               className="btn btn-sm btn-success text-uppercase"
//             >
//               Send Message
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function BrowseCVs(props) {
  props.setShowNavBar(true);
  // let navigate = useNavigate([]);

  // filters
  // const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState({});
  // const [graduationYear, setGraduationYear] = useState("");
  const [applicants, setApplicants] = useState();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_HOST}/users`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          console.log(result.users);
          setApplicants(result.users);
        }
      })
      .catch((error) => {
        // console.log(error);
        // alert(error.message);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="py-9 wrapper bg-[#f2f2f2]">
        <div className=" my-5 flex flex-row md:gap-8 sm:gap-2 py-9 sm:py-3  ">
          <img
            className="md:w-4/12 sm:w-6/12 h-[300px] rounded-xl "
            src={SmilingWoman}
          ></img>
          <div className="sm:w-6/12 md:w-8/12  flex flex-col md:justify-around sm:justify-center ">
            <h3 className="font-semibold text-3xl  ">Applicant Name</h3>
            <h3 className="font-semibold text-xl text-slate-500 ">
              Accra, Ghana
            </h3>
            <h3 className="font-semibold text-xl sm:hidden ">
              Bio statement goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed quis viverra diam. Nullam mauris eros,
              lacinia id nunc et, malesuada scelerisque urna. Mauris eget erat
              eu neque auctor Ă¡ÒÖÈĜŉ;ºÈ¡ŉ¡y´ŉÇÖy´ĝŉ®¡µŉá¡Òyŉº¡ºŉÌ¡Òŉy´ÒĝŉÖ¡Ì´ºŉ
              pellentesque elit. Nulla eu metus varius, porta odio eu, volutpat
              tortor
            </h3>
          </div>
        </div>
        <h3 className="font- text-md md:hidden pb-3 ">
          Bio statement goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed quis viverra diam. Nullam mauris eros, lacinia id
          nunc et, malesuada scelerisque urna. Mauris eget erat eu neque auctor
          Ă¡ÒÖÈĜŉ;ºÈ¡ŉ¡y´ŉÇÖy´ĝŉ®¡µŉá¡Òyŉº¡ºŉÌ¡Òŉy´ÒĝŉÖ¡Ì´ºŉ pellentesque elit.
          Nulla eu metus varius, porta odio eu, volutpat tortor
        </h3>
      </div>

      <div className="flex md:w-12/12 flex-col sm:w-12/12 wrapper mt-5 my-10 ">
        <div className="md:grid-cols-3 sm:grid-cols-2 grid  w-full gap-4 ">
          <div className="flex flex-col  text-center h-[200px] row-span-1 rounded-md p-5 bg-[#69C080]">
            {" "}
            <IconPack1
              className="w-2/12 stroke-white stroke-[7px]"
              style={{
                // height: "100px",
                width: "auto",
                stroke: "#FFF",
                fill: "#69C080",
              }}
            />{" "}
            <p className="font-semibold text-white text-xl ">Download CV</p>{" "}
          </div>
          <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
            {" "}
            <IconPack2
              className="w-2/12  stroke-[7px]"
              style={{
                // height: "100px",
                width: "auto",
                stroke: "#94a3b8",
                fill: "#f2f2f2",
              }}
            />{" "}
            <p className="font-semibold text-xl ">Watch Profile Video</p>{" "}
          </div>
          <div className="flex flex-col text-center h-[200px] row-span-1 rounded-md p-5 bg-[#f2f2f2]">
            {" "}
            <IconPack3
              className="w-2/12  stroke-[7px]"
              style={{
                // height: "100px",
                width: "auto",
                stroke: "#94a3b8",
                fill: "#f2f2f2",
              }}
            />{" "}
            <p className="font-semibold text-xl ">Send Message</p>{" "}
          </div>
        </div>
      </div>

      <IdealCandidateSection />

      <Footer></Footer>
    </>
  );
}

export default BrowseCVs;
