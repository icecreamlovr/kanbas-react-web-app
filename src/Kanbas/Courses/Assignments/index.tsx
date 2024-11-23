import AssignmentControl from "./AssignmentControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
import ItemControlButtons from "./ItemControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAssignments, addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import FacultyProtectedRoute from "../../Account/FacultyProtectedRoute";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div>
      <FacultyProtectedRoute>
        <AssignmentControl cid={cid} />
        <br />
        <br />
        <br />
        <br />
      </FacultyProtectedRoute>
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical color="grey" className="me-1 fs-3" />
            <IoMdArrowDropdown className="me-1 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              // .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="row">
                    <div className="col-1" style={{ width: 100 }}>
                      <BsGripVertical color="grey" className="me-2 fs-3" />
                      <GoChecklist color="green" className="me-1 fs-3" />
                    </div>
                    <div className="col">
                      <Link
                        id="wd-assignments-link-a1"
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="text-dark"
                        style={{ textDecoration: "none" }}
                      >
                        {assignment._id} - {assignment.title}
                      </Link>
                      <br />
                      <span className="pe-3 border-end border-grey text-danger">Multiple Modules</span>
                      <span className="ps-3 pe-3 border-end border-grey">
                        {/* <b>Not Available Until</b> {assignment.availableFromDate || "May 6 at 12:00am"} */}
                        <b>Not Available Until</b>{" "}
                        {assignment.dueDate
                          ? new Date(assignment.availableFromDate).toLocaleString()
                          : "May 6 at 12:00am"}
                      </span>
                      <span className="ps-3 pe-3 border-end border-grey">
                        {/* <b>Due</b> {assignment.dueDate || "May 13 at 11:59pm"} */}
                        <b>Due</b>{" "}
                        {assignment.dueDate ? new Date(assignment.dueDate).toLocaleString() : "May 13 at 11:59pm"}
                      </span>
                      <span className="ps-3">{assignment.points || 100} pts</span>
                    </div>
                    <div className="col-1 float-end" style={{ width: 100 }}>
                      <ItemControlButtons
                        assignmentId={assignment._id}
                        deleteAssignment={(aid) => removeAssignment(aid)}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
