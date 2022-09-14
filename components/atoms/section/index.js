import classNames from "classnames";
import React from "react";

import { motion } from "framer-motion";

import style from "./section.module.scss";

const Section = ({
  children,
  isInvert,
  hasYPadding,
  hasTopMargin,
  id,
  isSmall,
}) => (
  <motion.div
    id={id}
    className={classNames(style.Section, {
      [style.isInvert]: isInvert,
      [style.hasYPadding]: hasYPadding,
      [style.hasTopMargin]: hasTopMargin,
      [style.isSmall]: isSmall,
    })}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 },
    }}
  >
    {" "}
    {children}{" "}
  </motion.div>
);

export default Section;
