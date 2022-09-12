import React from "react";

import Image from "next/image";
import Link from "next/link";

import style from "./card.module.scss";

const Card = ({ src, label }) => (
  <Link
    className={style.Card}
    href="https://url-shortener-st.herokuapp.com/"
    legacyBehavior={false}
    target="_blank"
  >
    <Image
      src={src}
      width="100%"
      height="100%"
      layout="fill"
      objectFit="cover"
    />
    <span className={style.Overlay}>{label}</span>
  </Link>
);

export default Card;
