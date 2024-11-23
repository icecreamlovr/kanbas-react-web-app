import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

const defaultTitle = `New Assignment`;
const defaultDescription = `New Assignment Description`;
const defaultPoints = 100;
const defaultDueDate = `2024-05-13`;
const defaultAvailableFromDate = `2024-05-06`;
const defaultAvailableUntilDate = `2024-05-15`;

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const isNew = aid === "New";

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((assignment: any) => assignment._id === aid);

  const [assignmentTitle, setAssignmentTitle] = useState(isNew ? defaultTitle : assignment.title);
  const [description, setDescription] = useState(
    isNew ? defaultDescription : assignment.description || defaultDescription
  );
  const [points, setPoints] = useState(isNew ? defaultPoints : assignment.points || defaultPoints);
  const [dueDate, setDueDate] = useState(isNew ? defaultDueDate : assignment.dueDate || defaultDueDate);
  const [availableFromDate, setAvailableFromDate] = useState(
    isNew ? defaultAvailableFromDate : assignment.availableFromDate || defaultAvailableFromDate
  );
  const [availableUntilDate, setAvailableUntilDate] = useState(
    isNew ? defaultAvailableUntilDate : assignment.availableUntilDate || defaultAvailableUntilDate
  );

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = {
      title: assignmentTitle,
      course: cid,
      description: description,
      points: points,
      dueDate: dueDate,
      availableFromDate: availableFromDate,
      availableUntilDate: availableUntilDate,
    };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
  };

  const updateExistingAssignment = async () => {
    if (!cid) return;
    const newAssignment = {
      _id: aid,
      title: assignmentTitle,
      course: cid,
      description: description,
      points: points,
      dueDate: dueDate,
      availableFromDate: availableFromDate,
      availableUntilDate: availableUntilDate,
    };
    await assignmentsClient.updateAssignment(newAssignment);
    dispatch(updateAssignment(newAssignment));
  };

  const saveAssignment = async () => {
    if (isNew) {
      await createAssignmentForCourse();
    } else {
      await updateExistingAssignment();
    }
  };

  return (
    <div id="wd-assignments-editor" className="col-9 ms-5">
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input
        type="text"
        className="form-control my-2"
        id="wd-name"
        placeholder={assignmentTitle}
        defaultValue={assignmentTitle}
        onChange={(e) => setAssignmentTitle(e.target.value)}
      />
      <div className="my-3">
        <textarea
          id="wd-description"
          className="form-control"
          rows={10}
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="row my-3">
        {/* row is flex. need to clearfix, so that float-end can work as expected */}
        <div className="clearfix">
          <div className="col-8 float-end ms-1">
            <input
              type="text"
              className="form-control float-end"
              id="wd-points"
              defaultValue={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </div>
          <div className="col-3 float-end me-1">
            <label className="col-3 float-end" htmlFor="wd-points">
              Points
            </label>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="clearfix">
          <div className="col-8 float-end ms-1">
            <select className="form-control form-select" id="wd-assignments">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
          <div className="col-3 float-end me-1">
            <label htmlFor="wd-assignments" className="text-nowrap float-end">
              Assignment Group
            </label>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="clearfix">
          <div className="col-8 float-end ms-1">
            <select className="form-control form-select" id="wd-grade">
              <option selected>Percentage</option>
            </select>
          </div>
          <div className="col-3 float-end me-2">
            <label htmlFor="wd-grade" className="text-nowrap float-end">
              Display Grade as
            </label>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="clearfix">
          <div className="col-8 float-end border ms-1 p-3">
            {/* col-10 means 10/12 of the parent's width (minus padding margin) */}
            <select className="form-control form-select col-10">
              <option selected>Online</option>
            </select>
            <div className="my-3">
              <b>Online Entry Options</b>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="textEntry" />
              <label className="form-check-label" htmlFor="textEntry">
                Text Entry
              </label>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="websiteUrl" checked />
              <label className="form-check-label" htmlFor="textEntry">
                Website URL
              </label>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="mediaRecordings" />
              <label className="form-check-label" htmlFor="textEntry">
                Media Recordings
              </label>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="studentAnnotations" />
              <label className="form-check-label" htmlFor="textEntry">
                Student Annotations
              </label>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="fileUploads" />
              <label className="form-check-label" htmlFor="textEntry">
                File Uploads
              </label>
            </div>
          </div>
          <div className="col-2 float-end me-2">
            <label htmlFor="wd-submission-type" className="text-nowrap float-end">
              Submission Type
            </label>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="clearfix">
          <div className="col-8 float-end border ms-1 p-3">
            <label className="form-label mb-2">
              <b>Assign To</b>
            </label>
            <input className="form-control my-2" type="text" value="Everyone" id="assignTo" />
            <label className="form-label my-2" htmlFor="dueDate">
              Due
            </label>
            <input
              type="date"
              className="form-control my-2"
              defaultValue={dueDate}
              id="dueDate"
              onChange={(e) => setDueDate(e.target.value)}
            />
            <div className="row ">
              <label className="form-label col-6 my-2" htmlFor="availableFrom">
                Available from
              </label>
              <label className="form-label col-6 my-2" htmlFor="until">
                Until
              </label>
            </div>
            <div className="row ">
              <div className="col-6">
                <input
                  type="date"
                  className="form-control"
                  defaultValue={availableFromDate}
                  id="availableFrom"
                  onChange={(e) => setAvailableFromDate(e.target.value)}
                />
              </div>
              <div className="col-6">
                <input
                  type="date"
                  className="form-control"
                  defaultValue={availableUntilDate}
                  id="until"
                  onChange={(e) => setAvailableUntilDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-2 float-end me-2">
            <label htmlFor="wd-submission-type" className="text-nowrap float-end">
              Assign
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-5 mb-3 border-bottom"></div>

      <div className="row my-3">
        <div className="clearfix">
          <button onClick={saveAssignment} className="btn btn-danger float-end m-1">
            <Link
              id="wd-assignments-link"
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="text-light"
              style={{ textDecoration: "none" }}
            >
              Save
            </Link>
          </button>
          <button className="btn btn-light float-end border m-1">
            <Link
              id="wd-assignments-link"
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              Cancel
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
