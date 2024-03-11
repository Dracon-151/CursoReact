import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./FirstApp";
import { Tarea1 } from "./Tarea1";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp 
            value={5}
        />
    </React.StrictMode>
)