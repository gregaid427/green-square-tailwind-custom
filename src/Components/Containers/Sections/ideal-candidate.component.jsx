import { Link } from "react-router-dom";

function IdealCandidateSection() {
  return (
    <>
      <div
        className="bg-success d-flex align-items-center justify-content-center p-5 text-center"
       
      >
        <div className="d-grid gap-3">
          <h3 className="display-5 text-white">
            Your ideal candidate is just a click away
          </h3>
          <div className=" mx-auto d-flex">
            <Link
              to={"/post-a-job"}
              className="btn btn-dark btn-lg"
              style={{ width: "200px", marginRight: "5px" }}
            >
              POST A JOB
            </Link>

            <Link
              to={"/cvs"}
              className="btn btn-warning btn-lg"
              style={{ width: "200px", marginLeft: "5px" }}
            >
              BROWSE CVS
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default IdealCandidateSection;
