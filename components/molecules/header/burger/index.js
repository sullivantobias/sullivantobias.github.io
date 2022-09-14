import React, { useState } from "react";

import classNames from "classnames";

import { useTranslation } from "next-i18next";

import Layout from "../../../utils/layout";

import style from "./burger.module.scss";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const { t } = useTranslation();

  const LINKS = [
    {
      label: t("titleAboutMe"),
      href: "about",
    },
    {
      label: t("titleSmallProjects"),
      href: "small",
    },
    {
      label: t("titleSkills"),
      href: "skills",
    },
    {
      label: t("titleWork"),
      href: "work",
    },
    {
      label: t("titleSocials"),
      href: "social",
    },
    {
      label: "Contact ",
      href: "contact",
    },
  ];

  const variants = {
    hidden: { height: 0 },
    enter: { height: "100vh" },
  };

  const transitions = { duration: 0.3 };

  return (
    <>
      <button
        className={classNames(style.Burger, {
          [style.Open]: open,
        })}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <Layout
          className={style.Menu}
          passedTransition={transitions}
          passedVariants={variants}
        >
          {LINKS.map(({ label, href }) => (
            <a key={href} onClick={handleClick} href={`#${href}`}>
              {label}
            </a>
          ))}
        </Layout>
      )}
    </>
  );
};

export default Burger;
