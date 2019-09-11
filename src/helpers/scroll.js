Math.determineDestination = (_ct, _st, _dis, _dur) => {
  let ct = _ct
  ct /= _dur / 2
  if (ct < 1) {
    return (_dis / 2) * ct * ct + _st
  }
  ct -= 1
  return (-_dis / 2) * (ct * (ct - 2) - 1) + _st
}

const pageScroll = id => {
  // determine distance to scroll
  const start = window.pageYOffset
  const top = document.getElementById(id).offsetTop
  const end = id === 'home' || id === 'connect' ? top : top - 100 // subtract fixed header height if not home
  const distance = end - start

  // configure scrolling animation
  const duration = 800
  const increment = 20

  // set initial time
  let currentTime = 0

  // define animate function
  const animate = () => {
    // increment current time
    currentTime += increment
    // set scroll destination value
    const destination = Math.determineDestination(
      currentTime,
      start,
      distance,
      duration,
    )
    // scroll to destination value
    window.scroll(0, destination)
    // call self if current time is less than duration
    if (currentTime < duration) {
      setTimeout(animate, increment)
    }
  }

  // call intial animate
  animate()
}

const slideScroll = (slideshowId, projectId) => {
  // determine distance to scroll
  const start = document.getElementById(slideshowId).scrollLeft
  const width = document.getElementById(projectId).clientWidth
  const end =
    document.getElementById(projectId).offsetLeft -
    window.innerWidth / 2 +
    width / 2
  const distance = end - start

  // configure scrolling animation
  const duration = 800
  const increment = 20

  // set initial time
  let currentTime = 0

  // define animate function
  const animate = () => {
    // increment current time
    currentTime += increment
    // set scroll destination value
    const destination = Math.determineDestination(
      currentTime,
      start,
      distance,
      duration,
    )
    // scroll to destination value
    document.getElementById(slideshowId).scroll(destination, 0)
    // call self if current time is less than duration
    if (currentTime < duration) {
      setTimeout(animate, increment)
    }
  }

  // call intial animate
  animate()
}

export { pageScroll, slideScroll }
