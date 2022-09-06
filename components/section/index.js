import classNames from "classnames";
import React from "react";

import style from "./section.module.scss";

const Section = ({ children, isInvert }) => (
  <div
    className={classNames(style.Section, {
      [style.isInvert]: isInvert,
    })}
  >
    {children}
  </div>
);

export default Section;
