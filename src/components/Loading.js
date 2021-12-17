import React, { Fragment } from "react";
import spinner from "./img/spinner.gif";

const Spinner = () => (
  <Fragment>
    <div className="center ">
      <img className="spinner" src={spinner} alt="" />
    </div>
  </Fragment>
);

export default Spinner;
