import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const linkIds: { [key: string]: string } = {
  Profile: "wd-account-profile-link",
  Signin: "wd-account-signin-link",
  Signup: "wd-account-signup-link",
};

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          id={linkIds[link]}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item text-danger border border-0 ${pathname.includes(link) ? "active" : ""}`}
        >
          {link}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kanbas/Account/Users`} className={`list-group-item border-white ${active("Users")}`}>
          Users
        </Link>
      )}
    </div>
  );
}
