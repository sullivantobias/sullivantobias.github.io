import classNames from "classnames";
import React from "react";

import style from "./section.module.scss";

const Section = ({ children, isInvert, asYPadding }) => (
  <div
    className={classNames(style.Section, {
      [style.isInvert]: isInvert,
      [style.asYPadding]: isInvert,
    })}
  >
    {children}
  </div>
);

export default Section;
