"use client";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a
            href="https://github.com/ryanchristo"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"github"}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ryanchristo-"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"linkedin"}
          </a>
        </li>
        <li>
          <span style={{ color: "rgba(255,255,255,0.25" }}>{"|"}</span>
        </li>
        <li>
          <a href="/contact">{"contact"}</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
