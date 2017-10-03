import React from 'react'

import styles from './TextContent.scss'

const TextContent = ({onHandleChange}) => {
  const handleUpdate = (e) => {
    onHandleChange(e.target.value)
  }
  return (
    <textarea
      className={styles.Textarea}
      onChange={handleUpdate}
      defaultValue='Write here' />
  )
}

export default TextContent
