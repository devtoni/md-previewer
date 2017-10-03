import React from 'react'
import { render } from 'react-dom'

import App from './components/App/App'
import './styles.scss'

const renderApp = () => {
  render(<App />, document.getElementById('root'))
}

renderApp()

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    renderApp()
  })
}

render(<App />, document.getElementById('root'))
