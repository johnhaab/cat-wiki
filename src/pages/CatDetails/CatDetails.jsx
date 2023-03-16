import React from "react";

const CatDetails = ({ data }) => {
  return (
    <div className="container-cat-details">
      <h1>{data.name}</h1>
      <p>{data.origin}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default CatDetails;
