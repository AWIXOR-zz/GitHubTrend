import React from "react";
import Header from "./components/header/header.component";
import FetchRepos from "./components/fetch-repos/fetch-repos.component";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FetchRepos />
    </div>
  );
};

export default App;
