import React from "react";

import classNames from "classnames";

import style from "./paragraph.module.scss";

const Paragraph = ({ children, isInvert, isCredit }) => (
  <p
    className={classNames(style.Paragraph, {
      [style.isInvert]: isInvert,
      [style.isCredit]: isCredit,
    })}
  >
    {children}
  </p>
);

export default Paragraph;
