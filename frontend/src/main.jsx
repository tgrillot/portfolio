import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_BE_API_URL
axios.defaults.auth = {
  username: import.meta.env.VITE_BE_API_USER,
  password: import.meta.env.VITE_BE_API_PW
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
