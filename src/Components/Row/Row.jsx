import React from "react";
import "./row.css";

const Row = ({ title, fetchurl, isLargerow }) => {
  return (
    <div className="row">
      {title}
      <div className="row__posters">
        <img src="https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7" />
        )
      </div>
    </div>
  );
};

export default Row;
