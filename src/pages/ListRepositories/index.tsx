import React from "react";

import "./index.css";
import Header from "../../components/Header";
import Repository from "../../components/Repository";
import { useHistory, Redirect } from "react-router-dom";

interface RepositoryModel {
  location?: any;
}

interface OptionsModel {
  name: string;
  language: string;
  html_url: string;
  description: string;
  owner: { login: string };
  stargazers_count: string;
}

const ListRepositories: React.FC<RepositoryModel> = (props) => {
  const { location } = props;
  const { state } = location;
  const history = useHistory();

  if (!state) {
    return <Redirect to="/" />;
  }

  const noRepositoryFound = state.options.length === 0;

  return (
    <div className="listRoot">
      <Header />

      <div className="historyNavigation">
        <div className="link" onClick={() => history.push("/")}>
          Search
        </div>

        <p className="ctrlBar"> / </p>

        <div className="linkRepo" style={{ fontWeight: "bold" }}>
          Repositories
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        {noRepositoryFound ? (
          <h2 className="noRepositoryFound">
            We couldn’t find any code matching: {state.search}
          </h2>
        ) : (
          <h1 className="title">Search results for: "{state.search}"</h1>
        )}

        {!noRepositoryFound && (
          <div className="listContainer">
            {state.options?.map((tuple: OptionsModel) => {
              return (
                <Repository
                  {...tuple}
                  name={tuple.name}
                  key={tuple.html_url}
                  owner={tuple.owner.login}
                  language={tuple.language}
                  description={tuple.description}
                  starsCount={tuple.stargazers_count}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListRepositories;
