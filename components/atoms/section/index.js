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
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default Section;
