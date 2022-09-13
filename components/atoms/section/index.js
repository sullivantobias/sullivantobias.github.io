import classNames from "classnames";
import React from "react";

import style from "./section.module.scss";

const Section = ({
  children,
  isInvert,
  hasYPadding,
  hasTopMargin,
  id,
  isSmall,
}) => (
  <div
    id={id}
    className={classNames(style.Section, {
      [style.isInvert]: isInvert,
      [style.hasYPadding]: hasYPadding,
      [style.hasTopMargin]: hasTopMargin,
      [style.isSmall]: isSmall,
    })}
  >
    {children}
  </div>
);

export default Section;
