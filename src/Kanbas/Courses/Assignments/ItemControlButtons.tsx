import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import DeleteConfirmation from "./DeleteConfirmation";

export default function ItemControlButtons({
  assignmentId,
  assignmentTitle,
  deleteAssignment,
}: {
  assignmentId: string;
  assignmentTitle: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const modalId = "wd-delete-assignment-confirmation-dialog-" + assignmentId;
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaTrash
        className="text-danger me-2 mb-1"
        // onClick={() => deleteAssignment(assignmentId)}
        data-bs-toggle="modal"
        data-bs-target={"#" + modalId}
      />
      <IoEllipsisVertical className="fs-4" />
      <DeleteConfirmation
        modalId={modalId}
        assignmentId={assignmentId}
        assignmentTitle={assignmentTitle}
        deleteAssignment={deleteAssignment}
      />
    </div>
  );
}
