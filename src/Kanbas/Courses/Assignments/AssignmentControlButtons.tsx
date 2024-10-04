import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="label label-default border border-dark rounded-pill me-1 p-1 pe-2 ps-2">40% of Total</span>
      <BsPlus className="me-2"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
