import { Metadata } from "next";

import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 | not found",
};

const NotFoundPage = () => (
  <div className={styles.page}>
    <div>
      <h1>{"404"}</h1>
      <h2>{"not found"}</h2>
    </div>
  </div>
);

export default NotFoundPage;
