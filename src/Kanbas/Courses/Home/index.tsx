import FacultyProtectedRoute from "../../Account/FacultyProtectedRoute";
import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill mx-3">
        <Modules />
      </div>
      <div className="d-none d-md-block ms-3 me-2">
        <FacultyProtectedRoute>
          <CourseStatus />
        </FacultyProtectedRoute>
      </div>
    </div>
  );
}
