import React from "react";
import fetch from "isomorphic-fetch";

import last30Days from "../date-manipulation/date-manipulation";
import RepositoriePreview from "../repo-preview/repo-preview.component";

class FetchRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      loading: false,
      currentPage: 1,
      reposPerPage: 5
    };
  }

  componentWillMount() {
    this.loadRepos();
  }

  loadRepos = () => {
    const { repos, currentPage } = this.state;
    const GithubApi = `https://api.github.com/search/repositories?q=created:>${last30Days()}&sort=stars&order=desc&page=${currentPage}`;

    this.setState({ loading: true });

    fetch(GithubApi)
      .then(response => response.json())
      .then(repo =>
        this.setState({
          repos: repo.items,
          loading: false
        })
      );
    console.log(repos);
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1
      }),
      this.loadRepos()
    );
  };

  render() {
    const { repos, loading } = this.state;

    return (
      <div className="repos">
        <RepositoriePreview {...repos} loading={loading} />
        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}
export default FetchRepos;
