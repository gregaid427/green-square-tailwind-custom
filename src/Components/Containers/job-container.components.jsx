import { useJobServices } from "../../Context/jobs.context";
import TagsBar from "../Tags/tag.component";
import Default from "./../../Assets/images/suitcase.png";
import { useEffect } from "react";

function JobContainer(props) {
  const { appliedJobs, getAppliedJobs } = useJobServices();
  useEffect(() => {
    !appliedJobs.length && getAppliedJobs();
  }, []);
  const disableApply = !!appliedJobs.find((job) => job._id === props.job._id);
  return (
    <><div className=" container">
      <div className="row d-flex ">
        <div className="col-md-4 col-sm-6" >
sasdasf
        </div>
        <div className="col-md-8 col-sm-6 " >
sasdasfccc
        </div>
      </div>
      </div>
    </>
  );
}
// mmmmmm
export default JobContainer;
