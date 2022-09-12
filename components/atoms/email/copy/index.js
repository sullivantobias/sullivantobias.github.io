import Image from "next/image";
import React, { useState } from "react";

import style from "../email.module.scss";

const EMAIl = "sullytobias@gmail.com";

const CopyEmail = () => {
  const [copySuccess, setCopySuccess] = useState(EMAIl);

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied in the clipboard!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    } finally {
      setTimeout(() => setCopySuccess(EMAIl), 1000);
    }
  };

  return (
    <div onClick={() => copyToClipBoard(EMAIl)} className={style.Email}>
      {copySuccess}
      <Image src="/copy.svg" height={25} width={25} />
    </div>
  );
};

export default CopyEmail;
