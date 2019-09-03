const animateScroll = (id) => {

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

  // append smooth scroll method
  Math.determineDestination = (ct, st, dis, dur) => {
    ct /= (dur / 2)
    if (ct < 1) {
      return dis / 2 * ct * ct + st
    }
    ct--
    return -dis / 2 * (ct * (ct - 2) - 1) + st
  }

  // define animate function
  const animate = () => {
    // increment current time
    currentTime += increment
    // set scroll destination value
    const destination = Math.determineDestination(currentTime, start, distance, duration)
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

export default animateScroll
