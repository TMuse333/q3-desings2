import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import {ContextProvider} from './context/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PositionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PositionProvider>,
)
