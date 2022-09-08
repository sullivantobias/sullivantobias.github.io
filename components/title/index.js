import React from "react";

import classNames from "classnames";

import style from "./title.module.scss";

const Title = ({ title, tag, isInvert, isUnderlined }) => {
  const CustomTitle = tag ? `h${tag}` : "h1";

  return (
    <>
      <CustomTitle
        className={classNames(style.Title, {
          [style.isInvert]: isInvert,
        })}
      >
        {title}
      </CustomTitle>
      {isUnderlined && <div className={style.isUnderlined} />}
    </>
  );
};

export default Title;
