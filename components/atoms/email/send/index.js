import Image from "next/image";
import React from "react";

import style from "../email.module.scss";

const SendEmail = () => {
  return (
    <a className={style.Email} href="mailto:sullytobias@gmail.com">
      Send me directly and email
      <Image src="/email.svg" height={25} width={25} />
    </a>
  );
};

export default SendEmail;
