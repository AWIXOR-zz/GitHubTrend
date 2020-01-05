import React from "react";

const RepositoriePreview = ({ repos, loading }) => {
  if (loading) return <h2>Loading...</h2>;
  return (
    <div className="repos">
      <div className="title">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default RepositoriePreview;
