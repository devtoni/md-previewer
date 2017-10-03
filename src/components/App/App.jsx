import React, { Component } from 'react'
import 'normalize-css'

import Title from '../Title/Title'
import SubTitle from '../SubTitle/SubTitle'
import TextContent from '../TextContent/TextContent'
import Previewer from '../Previewer/Previewer'

import styles from './App.scss'

class App extends Component {
  constructor () {
    super()
    this.state = { text: '' }
  }
  handleChangeState = (value) => {
    this.setState({ text: value })
  }
  render () {
    return (
      <div className={styles.App}>
        <Title title='markdown previewer' />
        <div className={styles.App_content_block}>
          <div className={styles.App_content_markdown}>
            <SubTitle title='markdown' />
            <TextContent onHandleChange={this.handleChangeState}/>
          </div>
          <div className={styles.App_content_preview}>
            <SubTitle title='preview' />
            <Previewer text={this.state.text} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
