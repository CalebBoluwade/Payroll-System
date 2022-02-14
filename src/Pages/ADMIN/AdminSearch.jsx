import React from "react";
import { useParams } from "react-router-dom";

const AdminSearch = () => {
  const { results } = useParams();

  return (
    <div>
      <h1>Here are the search results for ""</h1>
    </div>
  );
};

export default AdminSearch;
