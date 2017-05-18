import React, { PropTypes } from 'react'
import Link from './Link'
import styles from './Project.scss'

const Project = ({ current, direction, id, image, summary, tags, title, link: { production, repository } }) => (
  <div>
    {current === id &&
      <div className={direction === 'left' ? styles.slideLeft : styles.slideRight}>
        <div className={styles.container}>
          <div className={styles.slideContainer}>
            <Link link={production} className={styles.slideContent}>
              <img className={styles.image} alt="sample" src={image} />
            </Link>
            <div className={styles.text}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.summary}>{summary}</p>
              <p className={styles.summary}>{tags}</p>
              <div className={styles.links}>
                <Link link={production}>
                  View Project
                </Link>
                {repository &&
                  <Link link={repository}>
                    View GitHub
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </div>
)

Project.propTypes = {
  current: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    production: PropTypes.string.isRequired,
    repository: PropTypes.string
  }).isRequired
}

export default Project
