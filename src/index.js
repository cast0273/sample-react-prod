import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import { BrowserRouter, HashRouter } from 'react-router-dom'
//yarn add react-router-dom
// npm i react-router-dom

ReactDOM.render(
  <React.StrictMode>
    <HashRouter hashType='hashbang'>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
