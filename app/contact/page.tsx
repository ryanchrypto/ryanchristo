import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | contact",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"contact"}</h1>
          <p>
            {
              "I try to take a minimalist approach to communication platforms. We can stay connected using one of the following options:"
            }
          </p>
          <ul>
            <li>
              {"Email"}
              {": ryan [at] ryanchristo.com"}
            </li>
            <li>
              {"Signal"}
              {": [ available upon request ]"}
            </li>
            <li>
              {"Telegram"}
              {": [ available upon request ]"}
            </li>
            <li>
              {"Phone"}
              {": [ only when necessary ]"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
