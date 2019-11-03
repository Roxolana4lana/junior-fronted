import React from "react";
import { Link, withRouter } from "react-router-dom";
import MyProfile from "../../MyProfile/MyProfile";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>
      </ul>
    </div>
  );
};
export default withRouter(Navigation);
