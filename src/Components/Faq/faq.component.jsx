import { Link } from "react-router-dom";
import { UserContext } from "../../Context/auth.context";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { useContext } from "react";

function Faq(props) {
 
  return (
    <>
      <div className="py-3 container" >
      <div className="d-flex gap-5 py-2 font-weight-bold faq-questn" style={{background:"rgb(241 245 249)" ,borderLeft: '8px solid #00A300', paddingLeft:20 ,paddingRight:5 }} ><h5 className="fw-bold text-success">Q.</h5> <h5  className="fw-bold ">{props.title}</h5></div>

    <div className="d-flex gap-5  py-2 " style={{background:"rgb(248 250 252)",borderLeft: '8px solid #93A3A1', paddingLeft:20,paddingRight:5 , }} ><h5 className="fw-bold">A.</h5> <h5>{props.info}</h5></div>
    </div>
    </>
  );
}

export default Faq;
