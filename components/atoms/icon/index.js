import React from "react";
import Image from "next/image";

import style from "./icon.module.scss";

const Icon = ({ src, height, width }) => (
  <span className={style.Icon}>
    <Image
      priority
      className={style.Icon}
      width={width}
      height={height}
      src={src}
    />
  </span>
);

export default Icon;
