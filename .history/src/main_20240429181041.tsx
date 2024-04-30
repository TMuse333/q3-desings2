import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import {PositionProvider} from './components/context/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PositionProvider></PositionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
