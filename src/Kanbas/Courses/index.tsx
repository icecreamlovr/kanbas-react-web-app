import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import FacultyProtectedRoute from "../Account/FacultyProtectedRoute";
import * as courseClient from "./client";
import { useState, useEffect } from "react";

export default function Courses({ courses }: { courses: any[] }) {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const [, , , , breadcrumb1, breadcrumb2] = pathname.split("/");
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const users = await courseClient.findUsersForCourse(cid);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {breadcrumb1} {breadcrumb2 && "> " + breadcrumb2}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:aid"
              element={
                <FacultyProtectedRoute>
                  <AssignmentEditor />
                </FacultyProtectedRoute>
              }
            />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
