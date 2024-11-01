import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const linkClassNames: { [key: string]: string } = {
  Profile: "list-group-item text-danger border border-0",
  Signin: "list-group-item active border border-0",
  Signup: "list-group-item text-danger border border-0",
};
const linkIds: { [key: string]: string } = {
  Profile: "wd-account-profile-link",
  Signin: "wd-account-signin-link",
  Signup: "wd-account-signup-link",
};

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link id={linkIds[link]} to={`/Kanbas/Account/${link}`} className={linkClassNames[link]}>
          {link}
        </Link>
      ))}
    </div>
  );
}
