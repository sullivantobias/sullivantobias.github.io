import Image from "next/image";
import Link from "next/link";
import React from "react";

import style from "./card.module.scss";

const Card = ({ src, label }) => (
  <Link
    className={style.Card}
    href="https://url-shortener-st.herokuapp.com/"
    legacyBehavior={false}
    target="_blank"
  >
    <Image src={src} height={300} width={400} />
    <span className={style.Overlay}>{label}</span>
  </Link>
);

export default Card;
