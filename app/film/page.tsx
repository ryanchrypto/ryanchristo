import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import aspectator from "../../public/images/media_aspectator.jpg";
import livingonone from "../../public/images/media_livingonone.jpg";
import thesestorms from "../../public/images/media_thesestorms.jpg";
import wholeplanet from "../../public/images/media_wholeplanet.jpg";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | film",
};

const SolutionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"film"}</h1>
          <p>
            {
              "I studied film and film production while earning a degree in languages and literature. I also helped with student and local film projects."
            }
          </p>
          <p>
            {
              "The height of my filmmaking career was around 2010 when I co-produced an experimental short film and a feature-length documentary."
            }
          </p>
          <p>
            {
              "I don't have plans to continue filmmaking at the moment but I still see and think in frames and remain open to exploring new narratives."
            }
          </p>
          <div className={styles.item}>
            <h2>{"Rosa - These Storms | 2014"}</h2>
            <Image alt="Rosa - These Storms" src={thesestorms} />
            <p>
              <i>{"Camera Operator"}</i>
            </p>
            <p>
              {
                '"Rosa, a young Mayan woman, sits alone. She stares directly into the camera and for the first time has the courage to share her story. She has wrestled with rejection, forgiveness and the fight to keep her child alive. Now 27, she must overcome her past to follow dreams she once thought impossible."'
              }
            </p>
            <p>
              <i>{"Photography, Cinematography"}</i>
            </p>
            <p>
              <Link
                href="https://optimist.co/films/rosa-these-storms-documentary/"
                target="_blank"
              >
                {"more information"}
              </Link>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Alleviating Poverty in Vietnam | 2013"}</h2>
            <Image alt="Alleviating Poverty in Vietnam" src={wholeplanet} />
            <p>
              <i>{"Videographer"}</i>
            </p>
            <p>
              {
                '"Alleviating Poverty in Vietnam is a short promotional video that explores a day in the life of Whole Planet Foundation\'s Field Director, Daniel Zoltani, as he visits one of their partners in Vietnam. Daniel visits Tao Yeu Mai (TYM) - the leading microfinance institution in Thai Nguyen Province of Northern Vietnam. Daniel and the TYM staff go out to meet with their clients."'
              }
            </p>
            <p>
              <i>
                {
                  "Production, Photography, Videography, Audio Recording, Video Editing"
                }
              </i>
            </p>
            <p>
              <Link
                href="https://www.youtube.com/watch?v=HI_bLthLIXs"
                target="_blank"
              >
                {"watch video"}
              </Link>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Living on One Dollar | 2010 - 2012"}</h2>
            <Image alt="Living on One Dollar" src={livingonone} />
            <p>
              <i>{"Co-Producer, Cinematographer, Assistant Editor"}</i>
            </p>
            <p>
              {
                '"Living on One Dollar follows the experience of four young friends as they live on less than $1 a day for two months in rural Guatemala. They battle hunger, parasites and the realization that there are no easy answers. Yet, the generosity and strength of Rosa, a 20-year-old woman with her husband Anthony, and Chino, a 12-year-old boy gives them hope that there are ways to make a difference."'
              }
            </p>
            <p>
              <i>
                {
                  "Production, Photography, Cinematography, Audio Recording, Video Editing"
                }
              </i>
            </p>
            <p>
              <Link
                href="https://optimist.co/films/living-on-one-dollar-documentary/"
                target="_blank"
              >
                {"more information"}
              </Link>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Aspectator | 2010"}</h2>
            <Image alt="Aspectator" src={aspectator} />
            <p>
              <i>{"Co-Producer, Cinematographer"}</i>
            </p>
            <p>
              {
                '"The subject of a psychology study begins to lose his identity when he decides to follow a woman whose presence deteriorates his sight while also invigorating his desire to rediscover himself."'
              }
            </p>
            <p>
              <i>
                {"Production, Cinematography, Audio Recording, Video Editing"}
              </i>
            </p>
            <p>
              <Link href="https://vimeo.com/17481141" target="_blank">
                {"watch trailer"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
