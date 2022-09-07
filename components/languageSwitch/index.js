import React from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

const LanguageSwitch = () => {
  const router = useRouter();

  const { locale } = router;

  const lang =
    locale === "en"
      ? { code: "fr", label: "Francais" }
      : { code: "en", label: "English" };

  const changeLocale = () => {
    const { pathname, asPath } = router;

    router.push({ pathname }, asPath, {
      locale: lang.code,
    });
  };

  return <button onClick={changeLocale}>{lang.label}</button>;
};

export default LanguageSwitch;
