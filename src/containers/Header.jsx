import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

class HeaderContainer extends Component {
  render() {
    return (
      <Header
        currentView={this.props.currentView}
        animateScroll={this.props.animateScroll}
        showHeader={this.props.showHeader}
      />
    )
  }

}

HeaderContainer.propTypes = {
  currentView: PropTypes.string.isRequired,
  animateScroll: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired,
}

export default HeaderContainer
