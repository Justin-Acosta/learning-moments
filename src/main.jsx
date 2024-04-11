import React from "react"
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import "./index.css"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<BrowserRouter><App /></BrowserRouter>)
