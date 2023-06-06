import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './component/Navigation/Navigation.component'
import IndexPage from './pages/IndexPage/IndexPage.page'
import MoviePage from './pages/MoviePage/MoviePage.page'
import RegisterPage from './pages/RegisterPage/RegisterPage.page'
import LoginPage from './pages/LoginPage/LoginPage.page'

function App() {
  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      document.title = 'ScreenCritics[DEV]'
    }
  }, [])

  /*
   *
   * Universal Routing
   * Current Routes:
   * /
   * /movies/*
   *
   *
   */

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<IndexPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="movies">
          <Route path="*" element={<MoviePage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
