import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | contact",
};

const TextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"text"}</h1>
          <p>
            {
              "I've been writing various forms of technical documentation and proposals throughout my career in tech but I've been looking for ways to expand my thinking and writing. I'm exploring the following topics:"
            }
          </p>
          <ul>
            <li>
              {
                "rights of nature, ecological agency, and interspecies mutualism"
              }
            </li>
            <li>
              {
                "dark forest theory applied to privacy, intelligence, and the internet"
              }
            </li>
            <li>
              {
                "science-fiction, punk ideologies, and imagining the future in art"
              }
            </li>
          </ul>
          <p>
            <i>
              {
                "For more technical writing related to the topics explored by my company, i.e. distributed systems, governance frameworks, and decentralized monitoring, reporting, and verification, see "
              }
              <a
                href="https://chora.studio/research"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"chora.studio/research"}
              </a>
            </i>
            {"."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
