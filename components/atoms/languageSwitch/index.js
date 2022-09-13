import React from "react";
import { useRouter } from "next/router";

import style from "./languageSwitch.module.scss";

const LanguageSwitch = () => {
  const router = useRouter();

  const { locale } = router;

  const lang =
    locale === "en"
      ? { code: "fr", label: "English" }
      : { code: "en", label: "Français" };

  const changeLocale = () => {
    const { pathname, asPath } = router;

    router.push({ pathname }, asPath, {
      locale: lang.code,
      scroll: false,
    });
  };

  return (
    <button className={style.LanguageSwitch} onClick={changeLocale}>
      {lang.label}
    </button>
  );
};

export default LanguageSwitch;
