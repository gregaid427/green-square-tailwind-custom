import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";
import Faq from "../../Components/Faq/faq.component";
import FaqImg1 from "./../../Assets/images/african-american-business-woman-by-window.png";
import FaqSteps from "../../Components/Faq/faqSteps.component";
import FaqStepsAlt from "../../Components/Faq/faqSteps.componentAlt";

function CompanyFaq(props) {



       const Tab = () => {
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";

    return (
      <div className="container">
        <ul className="tab-list">
          <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
          >
            <h4 className="display-6 fw-bold py-2">FAQs</h4>
          </li>
          <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
          >
            <h4 className="display-6 fw-bold py-2">How it Works</h4>
          </li>
        </ul>
        <div className="content-container">
          <div className={`content ${getActiveClass(1, "active-content")}`}>
            <Faq
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit?"}
              info={
                "Loremg ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elit?"
              }
            ></Faq>
            <Faq
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit?"}
              info={
                "Loremg ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elit?"
              }
            ></Faq>
            <Faq
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit?"}
              info={
                "Loremg ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elLorem ipsum dolor sit amet, consectetur adipiscing elit?"
              }
            ></Faq>
          </div>
          <div className={`content ${getActiveClass(2, "active-content")}`}>
            <FaqSteps
              number={1}
              text={
                "Create an account with your company details including your profile, line of work and location."
              }
              image={FaqImg1}
            ></FaqSteps>
            ;
            <FaqStepsAlt
              number={2}
              text={
                "Post your job offer with all the necessary information, and get access to thousands of students, professionals and aspirants in a nation wide database that is growing daily."
              }
              image={FaqImg1}
            ></FaqStepsAlt>
            ;
            <FaqSteps
              number={3}
              text={
                "Browse through CV’s, create tailor-made questionnaires and review all your applicants with features like our exclusive pre-interview function that allows you to interview aspirants all at the same time! *"
              }
              image={FaqImg1}
            ></FaqSteps>
            ;
            <FaqStepsAlt
              number={4}
              text={
                "Invite applicants to meetings,shortlist or hire directly, all on the Greensquare platform."
              }
              image={FaqImg1}
            ></FaqStepsAlt>
            ;
            <FaqSteps
              number={5}
              text={
                "Be certain you’re hiring the right people that would truly take your business to the next level, with unlimited access to our entire database of CVs from all current and soon-to-be employee hopefuls in the country.*"
              }
              image={FaqImg1}
            ></FaqSteps>
            ;
          </div>
          <div className={`content ${getActiveClass(3, "active-content")}`}>
            <h2>Dolor</h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mb-4" style={{ background: "rgb(241,245,249)" }}>
        <div className="container py-4 d-flex items-center diplay-2 text-success  ">
          <h3 className="fw-bolder mb-0   ">
            Frequently Asked Questions (FAQs)
          </h3>
        </div>
      </div>
      <Tab />

      <h3 className="text-center fw-bold my-4 display-6 text-success">
        That’s the Green Square way!
      </h3>
      <Footer></Footer>
    </>
  );

  
  
 
}

export default CompanyFaq ;
