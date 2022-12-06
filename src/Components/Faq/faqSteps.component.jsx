import { Link } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { useContext } from "react";

function FaqSteps(props) {
 
  return (
    <>
      <div className="container my-2">
        <div className="row d-flex items-center justify-center mx-auto">
          <img
            className=" faq-text-pad-img col-md-6 p-0 "
            style={{ borderRadius: 40 }}
            src={props.image}
          ></img>
          <div
            className="p-3 d-flex col-md-6 my-auto faq-text-pad "
            style={{
              background: "#fff",
              marginLeft: -100,
              borderRadius: 20,
              boxShadow: " 2px 5px rgb(241,245,249)",
            }}
          >
            {" "}
            <div className="text-success   px-4 ">
              <h3 className="display-2  fw-bold faq-text-pad-number ">{props.number}</h3>
            </div>{" "}
            <div className="d-flex items-center justify-center" >
              <p className="fw-bold faq-text-pad-text py-auto ">
               {props.text}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqSteps;
