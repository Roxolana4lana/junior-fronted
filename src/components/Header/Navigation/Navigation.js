import React from "react";
import { Ul, Li } from "./styles";
import { Link, withRouter } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Ul>
        <Li>
          <Link to="/">Start</Link>
        </Li>
        <Li>
          <Link to="/my-profile">My Profile</Link>
        </Li>
      </Ul>
    </div>
  );
};
export default withRouter(Navigation);
