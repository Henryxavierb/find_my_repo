import React from "react";

import "./index.css";
import { useHistory } from "react-router-dom";
import githubIcon from "../../assets/github-icon.png";

const HeaderBar: React.FC = () => {
  const history = useHistory();

  return (
    <div className="container">
      <img
        width="42"
        height="42"
        src={githubIcon}
        alt="github icon"
        draggable="false"
        onClick={() => history.push("/")}
      />
    </div>
  );
};

export default HeaderBar;
