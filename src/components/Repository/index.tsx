import React from "react";

import "./index.css";
import colors from "./colors.json";
import starImage from "../../assets/star.svg";

interface Repository {
  // name?: string (optional)
  name: string;
  language: string;
  starsCount: string;
  description: string;
}

const Repository: React.FC<Repository> = (props) => {
  const { name, language, description, starsCount } = props;

  const languageColor: { [index: string]: any } = colors;

  return (
    <div className="repoContainer">
      <div className="about">
        <div className="name">{name}</div>

        {description && <div className="description">{description}</div>}

        <div className="foot">
          {language && (
            <div className="languageContainer">
              <div
                className="colorLanguage"
                style={{ backgroundColor: languageColor[language] }}
              />
              <div className="language">{language}</div>
            </div>
          )}

          <div className="stars">
            <span className="starCount">{starsCount}</span>

            <img src={starImage} alt="Star" draggable="false" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
