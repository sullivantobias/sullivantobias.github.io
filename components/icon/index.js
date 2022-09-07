import React from "react";
import Image from "next/image";

const Icon = ({ src, height, width }) => (
  <div>
    <Image width={width} height={height} src={src} />
  </div>
);

export default Icon;
