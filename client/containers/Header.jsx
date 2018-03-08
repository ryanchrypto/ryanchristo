import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'

class HeaderContainer extends Component {
  render() {
    return (
      <Header
        currentView={this.props.currentView}
        scrollTo={this.props.scrollTo}
        showHeader={this.props.showHeader}
      />
    )
  }

}

HeaderContainer.propTypes = {
  currentView: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired,
}

export default HeaderContainer
