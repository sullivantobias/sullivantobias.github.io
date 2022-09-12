import React from "react";

import Icon from "../icon";

import style from "./social.module.scss";

const Social = ({ icon, text }) => {
  return (
    <div className={style.Social}>
      <Icon src={icon} height={35} width={35} />
    </div>
  );
};

export default Social;
