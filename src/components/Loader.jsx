import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => (
  <main className={styles.container}>
    <div className={styles.spinner} />
  </main>
)

export default Loader
