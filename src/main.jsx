import React from 'react'
import ReactDOM from 'react-dom/client'
import {UsersApp} from './UsersApp'
import './styles.css'
import { LoginPage } from './auth/LoginPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
  </React.StrictMode>,
)
