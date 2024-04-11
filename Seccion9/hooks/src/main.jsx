import React from 'react'
import ReactDOM from 'react-dom/client'
import { SimpleFormCustomHook } from './useEffect/SimpleFormCustomHook'
//import { HooksApp } from './HooksApp.jsx'
//import { Counter } from './useState/Counter.jsx'
//import { CounterCustomHook } from './useState/CounterCustomHook.jsx'
//import { SimpleForm } from './useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterCustomHook/> */}
    {/* <SimpleForm /> */}
    <SimpleFormCustomHook/>
  </React.StrictMode>,
)
