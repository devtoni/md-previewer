import React from 'react'
import PropTypes from 'prop-types'

const Title = (props) => (
  <h1>{props.title.toUpperCase()}</h1>
)

Title.defaultProps = {
  title: 'Title'
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}
export default Title
