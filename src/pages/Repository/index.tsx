import React from "react";

import "./index.css";
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

const Repository: React.FC<PropsModel> = (props) => {
  const { location } = props;
  const { state } = location;
  const history = useHistory();

  const [userData, setUserData] = React.useState<RepositoryModel | null>(null);

  React.useEffect(() => {
    if (!state) history.push("/");
  }, [history, state]);

  React.useEffect(() => {
    async function fetchUserDetail() {
      const { data } = await api.get(`/users/${state.owner}`);

      setUserData(data);
    }

    fetchUserDetail();
  }, [state.owner]);

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

        <PrefaceRepository
          owner={state.owner}
          url={state.html_url}
          projectName={state.name}
          stars={state.starsCount}
          UserUrl={userData?.html_url}
          description={state.description}
        />
      </div>
    </div>
  );
};

export default Repository;
