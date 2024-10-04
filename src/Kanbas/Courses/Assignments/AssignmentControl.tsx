import { FaPlus } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControl() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <div className="col-3 me-1 float-start">
        <div className="input-group" style={{ width: 300 }}>
          <span className="input-group-text"><SlMagnifier /></span>
          <input type="text" className="form-control me-3 float-begin" id="assignment-search" placeholder="Search..." />
        </div>
      </div>
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
    </div>
  );
}