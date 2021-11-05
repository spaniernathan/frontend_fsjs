import React, {Fragment} from "react";
import "./App.css";

const Base = ({setDir}) => {
  return (
    <Fragment>
      <h1>base</h1>
      <button onClick={() => setDir(1)}>go to login</button>
    </Fragment>
  );
};

export default Base;