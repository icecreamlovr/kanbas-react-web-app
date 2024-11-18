import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "Module 5",
    description: "Learn Node Web Server",
    course: "CS5610 Web Development",
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <br />
      <br />
      <a id="wd-retrieve-assignments" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <br />
      <a id="wd-retrieve-assignment-score" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment/score`}>
        Get Score
      </a>
      <br />
      <a
        id="wd-retrieve-assignment-completed"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/completed`}
      >
        Get Completed Status
      </a>

      <br />
      <br />

      <a id="wd-retrieve-module-name" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Name
      </a>
      <br />
      <a
        id="wd-retrieve-module-description"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/description`}
      >
        Get Description
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <h5>Assignment</h5>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <br />

      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
      />
      <br />

      <div className="form-check form-switch float-start">
        <input
          type="checkbox"
          className="form-check-input"
          checked={assignment.completed}
          id="wd-assignment-completed"
          onChange={(e) => setAssignment({ ...assignment, completed: !assignment.completed })}
        />
        <label htmlFor="wd-assignment-completed">Completed</label>
      </div>
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed Status
      </a>
      <br />
      <br />
      <h5>Module</h5>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <br />
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>
      <input
        className="form-control w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
    </div>
  );
}
