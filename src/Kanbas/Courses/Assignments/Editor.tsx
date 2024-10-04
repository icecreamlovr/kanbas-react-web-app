import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="col-9 ms-5">
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input type="text" className="form-control my-2" id="wd-name" placeholder="A1" value="A1" />
      <div className="my-3">
        <textarea id="wd-description" className="form-control" rows={10} >
        The assignment is available online
        Submit a link to the landing page of
        </textarea>
      </div>

      <div className="row my-3">
        {/* row is flex. need to clearfix, so that float-end can work as expected */}
        <div className="clearfix">
          <div className="col-8 float-end ms-1">
            <input type="text" className="form-control float-end" id="wd-points" value={100} />
          </div>
          <div className="col-3 float-end me-1">
            <label className="col-3 float-end" htmlFor="wd-points">Points</label>
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
            <label htmlFor="wd-assignments" className="text-nowrap float-end">Assignment Group</label>
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
            <label htmlFor="wd-grade" className="text-nowrap float-end">Display Grade as</label>
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
            <div className="my-3"><b>Online Entry Options</b></div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="textEntry" />
              <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="websiteUrl" checked />
              <label className="form-check-label" htmlFor="textEntry">Website URL</label>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="mediaRecordings" />
              <label className="form-check-label" htmlFor="textEntry">Media Recordings</label>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="studentAnnotations" />
              <label className="form-check-label" htmlFor="textEntry">Student Annotations</label>
            </div>
            <div className="form-check my-3">
              <input className="form-check-input" type="checkbox" value="" id="fileUploads" />
              <label className="form-check-label" htmlFor="textEntry">File Uploads</label>
            </div>
          </div>
          <div className="col-2 float-end me-2">
            <label htmlFor="wd-submission-type" className="text-nowrap float-end">Submission Type</label>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="clearfix">
          <div className="col-8 float-end border ms-1 p-3">
            <label className="form-label mb-2"><b>Assign To</b></label>
            <input className="form-control my-2" type="text" value="Everyone" id="assignTo" />
            <label className="form-label my-2" htmlFor="dueDate">Due</label>
            <input type="date" className="form-control my-2" placeholder="" id="dueDate" />
            <div className="row ">
              <label className="form-label col-6 my-2" htmlFor="availableFrom">Available from</label>
              <label className="form-label col-6 my-2" htmlFor="until">Until</label>
            </div>
            <div className="row ">
              <div className="col-6">
                <input type="date" className="form-control" placeholder="" id="availableFrom" />
              </div>
              <div className="col-6">
                <input type="date" className="form-control" placeholder="" id="until" />
              </div>
            </div>
          </div>
          <div className="col-2 float-end me-2">
            <label htmlFor="wd-submission-type" className="text-nowrap float-end">Assign</label>
          </div>
        </div>
      </div>

      <div className="row mt-5 mb-3 border-bottom"></div>

      <div className="row my-3">
        <div className="clearfix">
          <button className="btn btn-danger float-end m-1">Save</button>
          <button className="btn btn-light float-end border m-1">Cancel</button>
        </div>
      </div>
    </div>
  );
}
