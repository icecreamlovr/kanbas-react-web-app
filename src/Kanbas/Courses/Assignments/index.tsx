import AssignmentControl from "./AssignmentControl"
import AssignmentControlButtons from "./AssignmentControlButtons"
import ItemControlButtons from "./ItemControlButtons"
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {

  return (
    <div>
      <AssignmentControl /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
             ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <ItemControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <ItemControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development
              <ItemControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1
              <ItemControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2
              <ItemControlButtons /> </li>
          </ul>
        </li>
      </ul>

    </div>
  );
//   return (
//     <div id="wd-assignments">
//       <AssignmentControl /><br /><br /><br /><br />
//       <input id="wd-search-assignment" placeholder="Search for Assignments" />
//       <button id="wd-add-assignment-group">+ Group</button>
//       <button id="wd-add-assignment">+ Assignment</button>
//       <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total <button>+</button>
//       </h3>
//       <ul id="wd-assignment-list">
//         <li className="wd-assignment-list-item">
//           <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
//             A1 - ENV + HTML
//           </a>
//           <br />
//           <div>
//             Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
//             <br />
//             <b>Due</b> May 13 at 11:59pm | 100 pts
//           </div>
//         </li>
//         <li className="wd-assignment-list-item">
//           <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
//             A2 - CSS + BOOTSTRAP
//           </a>
//           <br />
//           <div>
//             Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
//             <br />
//             <b>Due</b> May 20 at 11:59pm | 100 pts
//           </div>
//         </li>
//         <li className="wd-assignment-list-item">
//           <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
//             A3 - JAVASCRIPT + REACT
//           </a>
//           <br />
//           <div>
//             Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
//             <br />
//             <b>Due</b> May 27 at 11:59pm | 100 pts
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
}
