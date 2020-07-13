import React from "react";

import "./index.css";
import colors from "./colors.json";
import { useHistory } from "react-router-dom";
import starImage from "../../assets/star.svg";

interface Repository {
  name: string;
  owner: string;
  language?: string;
  starsCount: string;
  description?: string;
}

const Repository: React.FC<Repository> = (props) => {
  const { name, language, description, starsCount } = props;

  const history = useHistory();
  const languageColor: { [index: string]: any } = colors;

  function goToRepository() {
    history.push("/repository", props);
  }

  function ellipse(word: string) {
    return word.length > 120 ? `${word.slice(0, 120)}...` : word;
  }

  return (
    <div className="repoContainer">
      <div className="about">
        <div className="name" onClick={goToRepository}>
          {name}
        </div>

        <div className="description">
          {description
            ? ellipse(description)
            : "No description, website, or topics provided."}
        </div>

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
