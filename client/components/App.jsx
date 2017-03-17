import React from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import styles from './App.scss'

const App = () => (
  <div className={styles.container}>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
    <Footer />
  </div>
)

export default App
