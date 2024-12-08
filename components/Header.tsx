"use client";

import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.title}>
          <Link href="/">
            <div>{"ryan christoffersen"}</div>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/about">{"about"}</Link>
            </li>
            <li>
              <Link href="/tech">{"tech"}</Link>
            </li>
            <li>
              <Link href="/film">{"film"}</Link>
            </li>
            <li>
              <Link href="/text">{"text"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
