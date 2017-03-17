import React from 'react'
import { Motion, spring } from 'react-motion'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import styles from './App.scss'

const App = () => (
  <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1, { stiffness: 60 }) }}>
    {value => (
      <div className={styles.container} style={{ opacity: value.x }}>
        <Header />
        <Home />
        <Footer />
      </div>
    )}
  </Motion>
)

export default App
