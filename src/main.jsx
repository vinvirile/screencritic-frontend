import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { NavConditionProvider } from './context/navcondition.context.jsx'
import { MoviesProvider } from './context/movies.context.jsx'
import { UserProvider } from './context/user.context.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavConditionProvider>
        <MoviesProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </MoviesProvider>
      </NavConditionProvider>
    </BrowserRouter>
  </React.StrictMode>
)
