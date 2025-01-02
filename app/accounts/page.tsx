import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | accounts",
};

const AccountsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"accounts"}</h1>
          <p>
            {
              "For social media and other public platforms, the following is a complete list of public accounts that I own or operate:"
            }
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"github"}
              </a>
              <i>{" - for software projects"}</i>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/~ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"npmjs"}
              </a>
              <i>{" - for software projects"}</i>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ryanchristo-"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"linkedin"}
              </a>
              <i>{" - for work experience"}</i>
            </li>
            {/* <li>
              <a
                href="https://twitter.com/ryanchristo_"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"twitter"}
              </a>
              <i>{" - mostly for research"}</i>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/ryanchristo.bsky.social"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"bluesky"}
              </a>
              <i>{" - less active but exploring"}</i>
            </li> */}
            <li>
              <a
                href="https://www.youtube.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"youtube"}
              </a>
              <i>{" - mostly for research"}</i>
            </li>
            <li>
              <a
                href="https://hackmd.io/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"hackmd"}
              </a>
              <i>{" - historically for work"}</i>
            </li>
            <li>
              <a
                href="https://medium.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"medium"}
              </a>
              <i>{" - historically for work"}</i>
            </li>
            <li>
              <a
                href="https://substack.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"substack"}
              </a>
              <i>{" - inactive but exploring"}</i>
            </li>
            <li>
              <a
                href="https://independent.academia.edu/ryanchristo_"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"academia"}
              </a>
              <i>{" - inactive but exploring"}</i>
            </li>
            <li>
              <a
                href="https://mirror.xyz/ryanchristo.eth"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"mirror"}
              </a>
              <i>{" - inactive but exploring"}</i>
            </li>
          </ul>
          <p>
            <i>
              {
                "I do not have an account on X, Instagram, Facebook, etc. This is a complete list. If you see an account that is impersonating me, please let me know."
              }
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
