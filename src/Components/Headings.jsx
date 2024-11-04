/* eslint-disable react/prop-types */
import React from "react";
const Headings = ({ tittle }) => {
  return (
    <div className="justify-center items-center py-8 text-center">
      <h1 className="text-5xl font-bold">{tittle}</h1>
    </div>
  );
};

export default Headings;
