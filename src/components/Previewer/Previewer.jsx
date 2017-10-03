import React from 'react'
import marked from 'marked'
import styles from './Previewer.scss'

const Previewer = ({text}) => {
  const createMarkup = () => {
    const stringContent = marked(text, {sanitize: true, smartypants: true})
    return { __html: stringContent }
  }
  return <div
    className={styles.Previewer}
    dangerouslySetInnerHTML={createMarkup()}
          />
}
export default Previewer
