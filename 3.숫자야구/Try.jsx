import React from "react";

const Try = ({ tryInfo }) => {
  return (
    <li>
      <span>{tryInfo.try} : {tryInfo.result}</span>
    </li>
  );
};

export default Try;
