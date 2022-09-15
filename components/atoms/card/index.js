import React from "react";

import Image from "next/image";
import Link from "next/link";

import style from "./card.module.scss";

const Card = ({ src, label, href }) => (
  <Link
    className={style.Card}
    href={href}
    legacyBehavior={false}
    target="_blank"
  >
    <Image alt={label} src={src} layout="fill" objectFit="cover" priority />
    <span className={style.Overlay}>{label}</span>
  </Link>
);

export default Card;
