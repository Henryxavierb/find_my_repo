import React from "react";

import "./index.css";
import api from "../../service";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import GithubImage from "../../assets/Octocat.png";
import { CircularProgress } from "@material-ui/core";

const App: React.FC = () => {
  const history = useHistory();

  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function filterRepositories() {
    setLoading(true);

    api.get(`search/repositories?q=${search}`).then(({ data }) => {
      setLoading(false);

      history.push("/repositories", { options: data.items, search });
    });
  }

  return (
    <div className="root">
      <Header />

      <div className="searchContainer">
        <img
          width="300"
          alt="github icon"
          src={GithubImage}
          draggable="false"
        />

        <h1>A simple way to search repositories</h1>

        <form
          autoComplete="on"
          className="formContainer"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            autoFocus
            type="text"
            value={search}
            className="searchBar"
            placeholder="Type repository name"
            onChange={(event) => setSearch(event.target.value)}
          />

          <button
            className="searchButton"
            onClick={filterRepositories}
            disabled={!search || loading}
            style={{ opacity: !search ? 0.2 : 1 }}
          >
            {loading ? <CircularProgress size="30px" color="inherit" /> : "GO"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
