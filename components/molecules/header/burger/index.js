import React, { useState } from "react";

import classNames from "classnames";

import style from "./burger.module.scss";

const Burger = ({ links }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

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
      {open && <div></div>}
    </>
  );
};

export default Burger;
