import AssignmentControl from "./AssignmentControl"
import AssignmentControlButtons from "./AssignmentControlButtons"
import ItemControlButtons from "./ItemControlButtons"
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Assignments() {

  return (
    <div>
      <AssignmentControl /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical color="grey" className="me-1 fs-3" />
            <IoMdArrowDropdown className="me-1 fs-3" />
             ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1" style={{ width: 100 }}>
                  <BsGripVertical color="grey" className="me-2 fs-3" /><GoChecklist color="green" className="me-1 fs-3" />
                </div>
                <div className="col">
                  <Link id="wd-assignments-link-a1" to="/Kanbas/Courses/1234/Assignments/123" className="text-dark" style={{ textDecoration: "none" }}>A1</Link><br />
                  <span className="pe-3 border-end border-grey text-danger">Multiple Modules</span>
                  <span className="ps-3 pe-3 border-end border-grey"><b>Not Available Until</b> May 6 at 12:00am</span>
                  <span className="ps-3 pe-3 border-end border-grey"><b>Due</b> May 13 at 11:59pm</span>
                  <span className="ps-3">100 pts</span>
                </div>
                <div className="col-1 float-end" style={{ width: 100 }}><ItemControlButtons /></div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1" style={{ width: 100 }}>
                  <BsGripVertical color="grey" className="me-2 fs-3" /><GoChecklist color="green" className="me-1 fs-3" />
                </div>
                <div className="col">
                  <Link id="wd-assignments-link-a1" to="/Kanbas/Courses/1234/Assignments/123" className="text-dark" style={{ textDecoration: "none" }}>A2</Link><br />
                  <span className="pe-3 border-end border-grey text-danger">Multiple Modules</span>
                  <span className="ps-3 pe-3 border-end border-grey">Not Available Until May 13 at 12:00am</span>
                  <span className="ps-3 pe-3 border-end border-grey">Due May 20 at 11:59pm</span>
                  <span className="ps-3">100 pts</span>
                </div>
                <div className="col-1 float-end" style={{ width: 100 }}><ItemControlButtons /></div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1" style={{ width: 100 }}>
                  <BsGripVertical color="grey" className="me-2 fs-3" /><GoChecklist color="green" className="me-1 fs-3" />
                </div>
                <div className="col">
                  <Link id="wd-assignments-link-a1" to="/Kanbas/Courses/1234/Assignments/123" className="text-dark" style={{ textDecoration: "none" }}>A3</Link><br />
                  <span className="pe-3 border-end border-grey text-danger">Multiple Modules</span>
                  <span className="ps-3 pe-3 border-end border-grey">Not Available Until May 20 at 12:00am</span>
                  <span className="ps-3 pe-3 border-end border-grey">Due May 27 at 11:59pm</span>
                  <span className="ps-3">100 pts</span>
                </div>
                <div className="col-1 float-end" style={{ width: 100 }}><ItemControlButtons /></div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1" style={{ width: 100 }}>
                  <BsGripVertical color="grey" className="me-2 fs-3" /><GoChecklist color="green" className="me-1 fs-3" />
                </div>
                <div className="col">
                  <Link id="wd-assignments-link-a1" to="/Kanbas/Courses/1234/Assignments/123" className="text-dark" style={{ textDecoration: "none" }}>A4</Link><br />
                  <span className="pe-3 border-end border-grey text-danger">Multiple Modules</span>
                  <span className="ps-3 pe-3 border-end border-grey">Not Available Until May 27 at 12:00am</span>
                  <span className="ps-3 pe-3 border-end border-grey">Due May 28 at 11:59pm</span>
                  <span className="ps-3">100 pts</span>
                </div>
                <div className="col-1 float-end" style={{ width: 100 }}><ItemControlButtons /></div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row">
                <div className="col-1" style={{ width: 100 }}>
                  <BsGripVertical color="grey" className="me-2 fs-3" /><GoChecklist color="green" className="me-1 fs-3" />
                </div>
                <div className="col">
                  <Link id="wd-assignments-link-a1" to="/Kanbas/Courses/1234/Assignments/123" className="text-dark" style={{ textDecoration: "none" }}>A5</Link><br />
                  <span className="pe-3 border-end border-grey text-danger">Multiple Modules</span>
                  <span className="ps-3 pe-3 border-end border-grey">Not Available Until May 28 at 12:00am</span>
                  <span className="ps-3 pe-3 border-end border-grey">Due May 29 at 11:59pm</span>
                  <span className="ps-3">100 pts</span>
                </div>
                <div className="col-1 float-end" style={{ width: 100 }}><ItemControlButtons /></div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
