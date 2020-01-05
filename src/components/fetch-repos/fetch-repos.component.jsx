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
      totalPages: 34,
      scrolling: false
    };
  }

  componentDidMount() {
    this.loadRepos();
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScoll(e);
    });
  }

  handleScoll = e => {
    const { scrolling, totalPages, currentPage } = this.state;
    if (scrolling) return;
    if (totalPages <= currentPage) return;
    const lastRepo = document.querySelector(".repos>.repo:last-child");
    const lastRepoOffset = lastRepo.offsetTop + lastRepo.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;

    let bootomOffset = 20;
    if (pageOffset > lastRepoOffset - bootomOffset) this.loadMore();
  };

  loadRepos = () => {
    const { repos, currentPage } = this.state;
    const GithubApi = `https://api.github.com/search/repositories?q=created:>${last30Days()}&sort=stars&order=desc&page=${currentPage}`;

    fetch(GithubApi)
      .then(response => response.json())
      .then(repo =>
        this.setState({
          repos: [...repos, ...repo.items],
          scrolling: false
        })
      );
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1,
        scrolling: true
      }),
      this.loadRepos
    );
  };

  render() {
    const { repos } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto mt-2">
            <h1 className="title">Github Trending</h1>
            <p className="description ">
              The most starred Github repos that were created in the last 30
              days.
            </p>
          </div>
        </div>
        <RepositoriePreview repos={repos} />
      </div>
    );
  }
}

export default FetchRepos;
