/*
Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
Project must meet the following criteria:
Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
Contain at least 10 custom components
Allow for all CRUD operations via one or more APIs */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
