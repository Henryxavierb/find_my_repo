import React from "react";

import "./index.css";
import starImage from "../../assets/star.svg";

interface PrefaceModel {
  url: string;
  owner: string;
  stars?: number;
  UserUrl?: string;
  projectName: string;
  description?: string;
}

const PrefaceRepository: React.FC<PrefaceModel> = (props) => {
  const { description, UserUrl, owner, projectName, url, stars } = props;

  return (
    <div className="prefaceRoot">
      <div className="navigation">
        <a href="/">Search</a>
        <div> / </div>
        <a href={UserUrl}>{owner}</a>
        <div> / </div>
        <a href={url}>{projectName}</a>
      </div>

      <div className="prefaceDescription">
        {description || "No description, website, or topics provided."}
      </div>

      <div className="stars">
        <img src={starImage} alt="stars" />
        <div>{stars}</div>
      </div>
    </div>
  );
};

export default PrefaceRepository;
