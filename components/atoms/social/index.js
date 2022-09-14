import React from "react";

import Link from "next/link";

import Icon from "../icon";

import style from "./social.module.scss";

const Social = ({ icon, href }) => {
  return (
    <Link
      target="_blank"
      legacyBehavior={false}
      href={href}
      className={style.Social}
    >
      <Icon src={icon} height={35} width={35} />
    </Link>
  );
};

export default Social;
