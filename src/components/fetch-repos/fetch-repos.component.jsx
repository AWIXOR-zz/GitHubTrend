import React from "react";
import fetch from "isomorphic-fetch";
import { last30Days } from "../date-manipulation/date-manipulation";
import RepositoriePreview from "../repo-preview/repo-preview.component";

class FetchRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      currentPage: 1,
      reposPerPage: 100,
      totalPages: 34
    };
  }

  componentWillMount() {
    this.loadRepos();
  }

  loadRepos = () => {
    const { repos, currentPage } = this.state;
    const GithubApi = `https://api.github.com/search/repositories?q=created:>${last30Days()}&sort=stars&order=desc&page=${currentPage}`;

    fetch(GithubApi)
      .then(response => response.json())
      .then(repo =>
        this.setState({
          repos: [...repos, ...repo.items]
        })
      );
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1
      }),
      this.loadRepos
    );
  };

  render() {
    const { repos } = this.state;

    return (
      <div className="repos">
        <RepositoriePreview repos={repos} />
        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}

export default FetchRepos;
