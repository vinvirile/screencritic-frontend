import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './component/Navigation/Navigation.component'
import IndexPage from './pages/IndexPage/IndexPage.page'
import MoviePage from './pages/MoviePage/MoviePage.page'
import { NavBlurContext } from './context/navblur.context'

function App() {
  const { blurNav } = useContext(NavBlurContext)

  console.log(blurNav)

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<IndexPage />} />
        <Route path="movies">
          <Route path="*" element={<MoviePage />} />
        </Route>
      </Route>
      <Route path="/login" element={<h1>Login Page</h1>} />
    </Routes>
  )
}

export default App
