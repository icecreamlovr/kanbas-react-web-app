import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="ms-5 col-6">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control my-3" />
      <input placeholder="password" type="password" className="form-control my-3" />
      <Link id="wd-signin-btn" to="/Kanbas/Dashboard" className="btn btn-primary w-100 mb-3">Sign up</Link>
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
