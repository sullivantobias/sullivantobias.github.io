import React from "react";

import classNames from "classnames";

import style from "./paragraph.module.scss";

const Paragraph = ({ children, isInvert }) => (
  <p
    className={classNames(style.Paragraph, {
      [style.isInvert]: isInvert,
    })}
  >
    {children}
  </p>
);

export default Paragraph;
