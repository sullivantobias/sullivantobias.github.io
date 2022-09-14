import Image from "next/image";
import React from "react";

import LanguageSwitch from "../../atoms/languageSwitch";

import Burger from "./burger";

import style from "./header.module.scss";

const Header = () => (
  <div className={style.Header}>
    <Image alt="logo" width={30} height={30} src="/logo.svg" />
    <LanguageSwitch />
    <Burger />
  </div>
);

export default Header;
