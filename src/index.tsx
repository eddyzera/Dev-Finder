import React from 'react'
import ReactDOM from 'react-dom'
import './style/css/style.css'
import { App } from './App'
import { ThemeProvider } from './provider/store'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
