import React from "react";

import classNames from "classnames";

import style from "./title.module.scss";

const Title = ({ title, tag, isInvert, isUnderlined, isHighlighted }) => {
  const CustomTitle = tag ? `h${tag}` : "h1";

  return (
    <CustomTitle
      className={classNames(style.Title, {
        [style.isInvert]: isInvert,
        [style.isHighlighted]: isHighlighted,
      })}
    >
      {title}
      {isUnderlined && <div className={style.isUnderlined} />}
    </CustomTitle>
  );
};

export default Title;
