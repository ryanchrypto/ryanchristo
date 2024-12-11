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
              "I try to take a minimalist approach to social media and I usually prefer to stay connected with friends using one of the following options:"
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
          <p>
            {
              "For social media and other public platforms, the following is a complete list of active public accounts that I own or operate (i.e. accounts that are easily discoverable, use my name, and share content that I produce):"
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
            <li>
              <a
                href="https://twitter.com/ryanchristo_"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"twitter"}
              </a>
              <i>{" - for research and content"}</i>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"youtube"}
              </a>
              <i>{" - for research and content"}</i>
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
            </li>
            <li>
              <a
                href="https://substack.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"substack"}
              </a>
              <i>{" - less active but exploring"}</i>
            </li>
            <li>
              <a
                href="https://independent.academia.edu/ryanchristo_"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"academia"}
              </a>
              <i>{" - less active but exploring"}</i>
            </li>
            <li>
              <a
                href="https://mirror.xyz/ryanchristo.eth"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"mirror"}
              </a>
              <i>{" - less active but exploring"}</i>
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
          </ul>
          <p>
            <i>
              {
                "And no, I do not have an account on Facebook, Instagram, TikTok, etc. This is a complete list. If you see an account that is not on the list, please let me know so that I celebrate my celebrity status and take action if necessary."
              }
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
