import { useSelector } from "react-redux";
export default function FacultyProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "TA" || currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
    return children;
  } else {
    return "";
  }
}
