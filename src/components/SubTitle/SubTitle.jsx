import React from 'react'
import PropTypes from 'prop-types'

const SubTitle = (props) => (
  <h3>{props.title.toUpperCase()}</h3>
)

SubTitle.defaultProps = {
  title: 'Title'
}

SubTitle.propTypes = {
  title: PropTypes.string.isRequired
}
export default SubTitle
