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
              "I've been writing various forms of technical documentation and proposals throughout my tech career but I'm now looking for ways to (re)expand my thinking and writing. I'm currently exploring the following topics:"
            }
          </p>
          <ul>
            <li>
              {
                "rights of nature, ecological institutions, and interspecies mutualism"
              }
            </li>
            <li>
              {
                "dark forest theory in relation to privacy, intelligence, and the internet"
              }
            </li>
          </ul>
          <p>
            {
              "If you're interested in exploring any of the above topics alongside me, feel free to reach out. I'm also open to receive recommendations and to connect with anyone who can assist me with editing and reviews."
            }
          </p>
          <br />
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
