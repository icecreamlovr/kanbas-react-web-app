export default function DeleteConfirmation({
  modalId,
  assignmentId,
  deleteAssignment,
}: {
  modalId: string;
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <div id={modalId} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Confirm Deletion
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <label htmlFor="wd-name" className="form-label">
              Are you sure you want to delete the assignment {assignmentId}?
            </label>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              No
            </button>
            <button
              onClick={() => deleteAssignment(assignmentId)}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
