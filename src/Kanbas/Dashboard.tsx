import { Link } from "react-router-dom";
import { GoChecklist } from "react-icons/go";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (6)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <p className="wd-dashboard-course-title card-title h5 text-primary">CS1973 Web Development</p>
                  <p className="wd-dashboard-course-title card-text h5 text-secondary">CS1973.202410</p>
                  <p className="wd-dashboard-course-title card-text h6 text-secondary">202410_1 Fall 2024 Semester Full Term</p>
                  <GoChecklist className="fs-3"/>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <p className="wd-dashboard-course-title card-title h5 text-primary">CS1234 React JS</p>
                  <p className="wd-dashboard-course-title card-text h5 text-secondary">CS7777.202410</p>
                  <p className="wd-dashboard-course-title card-text h6 text-secondary">202410_1 Fall 2024 Semester Full Term</p>
                  <GoChecklist className="fs-3"/>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <p className="wd-dashboard-course-title card-title h5 text-primary">CS3229 Spring Boot</p>
                  <p className="wd-dashboard-course-title card-text h5 text-secondary">CS7777.202410</p>
                  <p className="wd-dashboard-course-title card-text h6 text-secondary">202410_1 Fall 2024 Semester Full Term</p>
                  <GoChecklist className="fs-3"/>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <p className="wd-dashboard-course-title card-title h5 text-primary">CS6123 Unix</p>
                  <p className="wd-dashboard-course-title card-text h5 text-secondary">CS7777.202410</p>
                  <p className="wd-dashboard-course-title card-text h6 text-secondary">202410_1 Fall 2024 Semester Full Term</p>
                  <GoChecklist className="fs-3"/>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <p className="wd-dashboard-course-title card-title h5 text-primary">CS1235 React JS</p>
                  <p className="wd-dashboard-course-title card-text h5 text-secondary">CS7777.202410</p>
                  <p className="wd-dashboard-course-title card-text h6 text-secondary">202410_1 Fall 2024 Semester Full Term</p>
                  <GoChecklist className="fs-3"/>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <p className="wd-dashboard-course-title card-title h5 text-primary">CS1236 React JS</p>
                  <p className="wd-dashboard-course-title card-text h5 text-secondary">CS7777.202410</p>
                  <p className="wd-dashboard-course-title card-text h6 text-secondary">202410_1 Fall 2024 Semester Full Term</p>
                  <GoChecklist className="fs-3"/>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <p className="wd-dashboard-course-title card-title h5 text-primary">CS7777 Generative AI</p>
                  <p className="wd-dashboard-course-title card-text h5 text-secondary">CS7777.202410</p>
                  <p className="wd-dashboard-course-title card-text h6 text-secondary">202410_1 Fall 2024 Semester Full Term</p>
                  <GoChecklist className="fs-3"/>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
