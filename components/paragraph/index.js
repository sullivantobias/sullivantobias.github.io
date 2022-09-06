import React from "react";

import classNames from "classnames";

import style from "./paragraph.module.scss";

const Paragraph = ({ children, className }) => (
  <p
    className={classNames(style.Paragraph, {
      [className]: className,
    })}
  >
    {children}
  </p>
);

export default Paragraph;
