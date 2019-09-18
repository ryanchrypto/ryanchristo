import React from 'react'

import Projects from './Projects'

import styles from './Software.module.scss'

const projects = [
  {
    id: 14,
    dates: '2018 - Present',
    image: 'img/software/colony.png',
    link: {
      live: 'https://colony.io',
      repo: 'https://github.com/JoinColony',
    },
    role: 'Developer Relations',
    summary:
      'Colony is a platform for open organizations built on Ethereum. I help build and maintain developer tools, write documentation, explore integrations, and manage developer relations.',
    tags:
      'React, Redux, SCSS, Gatsby, Webpack, Web3, Truffle, Solidity, Ethereum',
    title: 'Colony',
    type: 'software',
  },
  {
    id: 13,
    dates: '2018 - Present',
    image: 'img/software/chora.png',
    link: {
      live: 'https://chora.io',
      repo: 'https://github.com/choraio',
    },
    role: 'Software Developer',
    summary:
      'Chora is a side project that started out as a means to explore Ethereum. The intial focus was "software for decentralized organizations" but it remains a sandbox in its true form.',
    tags: 'React, Redux, SCSS, Webpack, Web3, Truffle, Solidity, Ethereum',
    title: 'Chora',
    type: 'software',
  },
  {
    id: 12,
    dates: '2017 - 2018',
    image: 'img/software/horizonapp.png',
    link: {
      live: 'https://api.horizonapp.co/',
      repo: null,
    },
    role: 'Full Stack Developer',
    summary:
      'Horizon App uses groups and mutual friends to help members find people and places to stay. I built the web application, rebuilt the latest version of the API, and integrated email services.',
    tags: 'React, Redux, LESS, Webpack, Ruby, Rails, PostgreSQL, Redis',
    title: 'Horizon App',
    type: 'software',
  },
  {
    id: 11,
    dates: '2017',
    image: 'img/software/ushahidi.png',
    link: {
      live: 'https://ushahidi.com',
      repo: 'https://github.com/ushahidi',
    },
    role: 'Volunteer Developer',
    summary:
      'Ushahidi is a crowdsourcing application that makes it easy to collect and visualize data on a map. I volunteered for three months implementing features and fixing bugs. ',
    tags: 'AngularJS, CSS, PHP',
    title: 'Ushahidi',
    type: 'software',
  },
  {
    id: 10,
    dates: '2017',
    image: 'img/software/joglonorthwest_new.png',
    link: {
      live: 'https://joglonorthwest.com',
      repo: null,
    },
    role: 'Full Stack Developer',
    summary:
      'Joglo Northwest is a small business that buys and sells Indonesian art, furniture and stone. I rebuilt their website and content management system using simple-cms as a foundation.',
    tags: 'React, Redux, SCSS, PostCSS, Webpack, Node, Express, MongoDB',
    title: 'Joglo Northwest',
    type: 'software',
  },
  {
    id: 9,
    dates: '2017',
    image: 'img/software/simple-cms.png',
    link: {
      live: null,
      repo: 'https://github.com/ryanchristo/simple-cms',
    },
    role: 'Full Stack Developer',
    summary:
      'After working through the freeCodeCamp projects, I built simple-cms to test my skills on a larger project, which was a content management system for small businesses and freelancers.',
    tags: 'React, Redux, SCSS, PostCSS, Webpack, Node, Express, MongoDB',
    title: 'simple-cms',
    type: 'software',
  },
  {
    id: 8,
    dates: '2017',
    image: 'img/software/fcc-projects.png',
    link: {
      live: null,
      repo: 'https://github.com/ryanchristo/fcc-projects',
    },
    role: 'Full Stack Developer',
    summary:
      'In order to advance my skills in JavaScript, I worked my way through the freeCodeCamp projects. The projects focus on full stack development with React, Node, Express, and MongoDB.',
    tags: 'React, Redux, SCSS, PostCSS, Webpack, Node, Express, MongoDB',
    title: 'fcc-projects',
    type: 'software',
  },
  {
    id: 7,
    dates: '2014',
    image: 'img/software/joglonorthwest_old.png',
    link: {
      live: null,
      repo: null,
    },
    role: 'Web Developer',
    summary:
      'Joglo Northwest is a small business that buys and sells Indonesian art, furniture, and stone. The project included a simple user-facing website and a custom built content management system.',
    tags: 'HTML, CSS, PHP, SQL',
    title: 'Joglo Northwest',
    type: 'software',
  },
  {
    id: 6,
    dates: '2014',
    image: 'img/software/greekdata.png',
    link: {
      live: null,
      repo: null,
    },
    role: 'Web Developer',
    summary:
      'Greek Database was a tool for learning Classical Greek. It included a dictionary, reading excercises, and flashcards for practicing vocabulary, verb conjugations, and noun declensions.',
    tags: 'HTML, CSS, PHP, SQL',
    title: 'Greek Database',
    type: 'software',
  },
  {
    id: 5,
    dates: '2013',
    image: 'img/software/docartnet.png',
    link: {
      live: null,
      repo: null,
    },
    role: 'Web Developer',
    summary:
      'Documentary Art Network was a professional network for documentary artists. Users could post stories, discuss ideas, find people to collaborate with, and rent or exchange equipment.',
    tags: 'HTML, CSS, PHP, SQL',
    title: 'Documentary Art Network',
    type: 'software',
  },
]

const Software = () => (
  <div id="software" className={styles.container}>
    <h2 className={styles.title}>{'software'}</h2>
    <Projects projects={projects} />
  </div>
)

export default Software
