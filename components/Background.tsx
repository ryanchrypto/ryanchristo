"use client";

import Image from "next/image";

import background from "../public/images/background.jpg";

import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.background}>
      <Image alt="background" src={background} />
    </div>
  );
};

export default Background;
