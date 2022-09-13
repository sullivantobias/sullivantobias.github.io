import classNames from "classnames";
import React from "react";

import style from "./button.module.scss";

const Button = ({ isInvert, label, href }) => (
  <a
    href={`#${href}`}
    className={classNames(style.Button, {
      [style.isInvert]: isInvert,
    })}
  >
    {label}
  </a>
);

export default Button;
