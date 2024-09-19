export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h2>Assignment Name</h2>
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select>
              <option value="VAL1">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select>
              <option value="VAL1">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select>
              <option value="VAL1">Online</option>
            </select>
            <br />
            <br />
            <div>
              Online Entry Options
              <br />
              <input type="checkbox" name="check-genre" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="check-genre" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" name="check-genre" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recording</label>
              <br />
              <input type="checkbox" name="check-genre" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="check-genre" id="wd-file-uploady" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
            <br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>

          <td>
            <tr>
              <label htmlFor="wd-assign-to">Assign to</label>
            </tr>
            <tr>
              <input id="wd-assign-to" value="Everyone" />
            </tr>
            <br />
            <tr>
              <label htmlFor="wd-due-date">Due</label>
            </tr>
            <tr>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </tr>
            <br />
            <tr>
              <tr>
                <td align="left" valign="top">
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td align="left" valign="top">
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="date" id="wd-available-from" value="2024-05-06" />
                </td>
                <td>
                  <input type="date" id="wd-available-until" value="2024-05-20" />
                </td>
              </tr>
            </tr>
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button id="wd-assignment-cancel" type="button">
          Cancel
        </button>
        <button id="wd-assignment-save" type="button">
          Save
        </button>
      </div>
    </div>
  );
}
