import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp.jsx'
import { CounterCustomHook } from './useState/CounterCustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    <CounterCustomHook/>
  </React.StrictMode>,
)
