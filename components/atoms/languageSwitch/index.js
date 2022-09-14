import React from "react";
import { LanguageSwitcher, useLanguageQuery } from "next-export-i18n";

import style from "./languageSwitch.module.scss";

const LanguageSwitch = () => {
  const [query] = useLanguageQuery();

  const lang = query?.lang === "en" ? "fr" : "en";
  const label = query?.lang === "en" ? "English" : "Français";

  return (
    <LanguageSwitcher lang={lang}>
      <button className={style.LanguageSwitch}>{label}</button>
    </LanguageSwitcher>
  );
};

export default LanguageSwitch;
