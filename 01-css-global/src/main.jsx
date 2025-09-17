import React from 'react'
import ReactDOM from 'react-dom/client'
// CORREÇÃO: A importação de 'App' foi ajustada para uma importação nomeada.
import { App } from './App.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
