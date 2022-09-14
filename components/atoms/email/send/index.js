import Image from "next/image";
import React from "react";

import { useTranslation } from "next-export-i18n";

import style from "../email.module.scss";

const SendEmail = () => {
  const { t } = useTranslation();

  return (
    <a className={style.Email} href="mailto:sullytobias@gmail.com">
      {t("email")}
      <Image alt="email" src="/email.svg" height={25} width={25} />
    </a>
  );
};

export default SendEmail;
