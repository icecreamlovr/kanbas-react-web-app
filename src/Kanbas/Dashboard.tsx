import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import FacultyProtectedRoute from "./Account/FacultyProtectedRoute";
import StudentProtectedRoute from "./Account/StudentProtectedRoute";
// import { enroll, unenroll } from "./Enrollments/reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  updateEnrollment,
  enrolling,
  setEnrolling,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
}) {
  // console.log(courses.length);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <FacultyProtectedRoute>
        <div>
          <h5>
            New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </div>
      </FacultyProtectedRoute>
      <StudentProtectedRoute>
        <div>
          <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary">
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        </div>
      </StudentProtectedRoute>
      <h2 id="wd-dashboard-enrolled-or-all">
        {currentUser.role === "ADMIN" || enrolling ? "All Courses" : "My Courses"} ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <p className="wd-dashboard-course-title card-title h5 text-primary">{course.name}</p>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    <FacultyProtectedRoute>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </FacultyProtectedRoute>
                    <StudentProtectedRoute>
                      {enrolling && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}

                      {/* {inEnrolled(course) ? (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-unenroll-course-click"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnroll(course._id);
                          }}
                          className="btn btn-success float-end"
                          id="wd-unenroll-course-click"
                        >
                          Enroll
                        </button>
                      )} */}
                    </StudentProtectedRoute>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
