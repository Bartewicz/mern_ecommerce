import React from 'react'
import ReactDOM from 'react-dom'

import './bootstrap.polyfill.css'
import './font-awesome.override.css'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
