import React from "react";

import "./index.css";
import Dounut from "./Dounut";
import api from "../../service";
import PrefaceUser from "./PrefaceUser";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import PrefaceRepository from "./PrefaceRepository";

interface PropsModel {
  location?: any;
}

interface RepositoryModel {
  bio?: string;
  login: string;
  name?: string;
  blog?: string;
  location?: string;
  html_url?: string;
  following?: string;
  followers?: string;
  avatar_url: string;
}

interface Contributors {
  login: string;
  html_url: string;
  contributions: string;
}

const Repository: React.FC<PropsModel> = (props) => {
  const { location } = props;
  const { state } = location;
  const history = useHistory();

  const [languagesRepo, setLanguage] = React.useState([]);
  const [contributors, setContributors] = React.useState([]);
  const [userData, setUserData] = React.useState<RepositoryModel | null>(null);

  React.useEffect(() => {
    if (!state) history.push("/");
  }, [history, state]);

  React.useEffect(() => {
    async function fetchUserDetail() {
      await api
        .get(`/users/${state.owner}`)
        .then(({ data }) => setUserData(data));
    }

    fetchUserDetail();
  }, [state.name, state.owner]);

  React.useEffect(() => {
    async function fetchLanguagesRepository() {
      await api
        .get(`/repos/${state.owner}/${state.name}/languages`)
        .then(({ data }) => setLanguage(data));
    }

    fetchLanguagesRepository();
  }, [state.name, state.owner]);

  React.useEffect(() => {
    async function fetchContributorsRepository() {
      await api
        .get(`/repos/${state.owner}/${state.name}/contributors`)
        .then(({ data }) => setContributors(data));
    }

    fetchContributorsRepository();
  }, [state.name, state.owner]);

  return (
    <div className="repositoryRoot">
      <Header />

      <div className="repositoryContainer">
        <PrefaceUser
          bio={userData?.bio}
          name={userData?.name}
          blog={userData?.blog}
          username={userData?.login}
          userUrl={userData?.html_url}
          avatar={userData?.avatar_url}
          location={userData?.location}
          followers={userData?.followers}
          following={userData?.following}
        />

        <div style={{ width: "100%" }}>
          <PrefaceRepository
            owner={state.owner}
            url={state.html_url}
            projectName={state.name}
            stars={state.starsCount}
            UserUrl={userData?.html_url}
            description={state.description}
          />

          <div className="bodyRepository">
            <div className="dounut">
              <Dounut languages={languagesRepo} />
            </div>

            <div className="contributors">
              <h1>Contributors</h1>

              <ul>
                {contributors.map((contributor: Contributors) => {
                  return (
                    <li key={contributor.login} className="contributorItem">
                      <a href={contributor.html_url}>{contributor.login}</a>
                      <div>{contributor.contributions}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
