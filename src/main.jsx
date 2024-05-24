import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { heroes } from "./data/heroes.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
