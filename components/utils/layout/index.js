import React from "react";

import { motion } from "framer-motion";

const Layout = ({
  children,
  className,
  key,
  passedVariants,
  passedTransition,
}) => {
  return (
    <motion.div
      key={key}
      variants={passedVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={passedTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
