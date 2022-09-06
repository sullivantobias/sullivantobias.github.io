import classNames from "classnames";
import React from "react";

import style from "./button.module.scss";

const Button = ({ isInvert }) => (
  <button
    className={classNames(style.Button, {
      [style.isInvert]: isInvert,
    })}
  >
    Button
  </button>
);

export default Button;
