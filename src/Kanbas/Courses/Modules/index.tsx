import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { modules } from "../../Database";
import { useParams } from "react-router";

export default function Modules() {
  const { cid } = useParams();
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical color="grey" className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons &&
                  module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical color="grey" className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
