import React, { useState, useEffect, useContext } from "react";
import Footer from "../../Components/Footer/footer.component";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";
import Faq from "../../Components/Faq/faq.component";
import FaqImg1 from "./../../Assets/images/african-american-business-woman-by-window.png";
import FaqSteps from "../../Components/Faq/faqSteps.component";
import FaqStepsAlt from "../../Components/Faq/faqSteps.componentAlt";

function jobseekerfaq(props) {



       const Tab = () => {
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";

    return (  
      <div className="wrapper  md:mb-5  sm:mb-2 ">
        <ul className="tab-list">
          <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
          >
            <h4 className="text-xl font-bold py-2">FAQs</h4>
          </li>
          <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
          >
            <h4 className="text-xl font-bold py-2">How it Works</h4>
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
                "Create your own professional proﬁle for employment, showcasing all your amazing capabilities and impressive skills for employers to view. FOR FREE"
                
              }
              image={FaqImg1}
            ></FaqSteps>
            ;
            <FaqStepsAlt
              number={2}
              text={
                "Browse through our database of hundreds of company proﬁles and job postings from your home."
              }
              image={FaqImg1}
            ></FaqStepsAlt>
            ;
            <FaqSteps
              number={3}
              text={
                "Apply, contact and gain the interest of employers all over the country"
              }
              image={FaqImg1}
            ></FaqSteps>
            ;
            <FaqStepsAlt
              number={4}
              text={
                "Answer questions and have interviews on your own time, on your own schedule, straight from the comfort of your bed with our GreenView feature.*"
                
              }
              image={FaqImg1}
            ></FaqStepsAlt>
            ;
            <FaqSteps
              number={5}
              text={
                "Accept, Decline or simply contemplate all job offers, to see which one gets you to your dreams the fastest. All for free!"
                
              }
              image={FaqImg1}
            ></FaqSteps>
            ;
            <h3 className="wrapper text-center font-semibold my-4 text-2xl text-[#69C080]">
        That’s the Green Square way!
      </h3>
          </div>
          <div className={`content ${getActiveClass(3, "active-content")}`}>
            <h2>Dolor</h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <><div className="" >
      <div className="mb-4" style={{ background: "rgb(241,245,249)" }}>
        <div className=" md:py-8 sm:py-4 flex items-center   text-[#69C080]  ">
          <h3 className="wrapper md:text-4xl sm:text-2xl font-semibold ">
            Frequently Asked Questions (FAQs)
          </h3>
        </div>
      </div>
      <Tab />
      </div>
      
      <Footer></Footer>
    </>
  );

  
  
 
}

export default jobseekerfaq;
