import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import TextYPositionProvider from './src/context/context.jsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
