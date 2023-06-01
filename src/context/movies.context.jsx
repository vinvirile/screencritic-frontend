import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const MoviesContext = createContext({
  moviesData: [],
  setMoviesData: () => null,
})

export const MoviesProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([])

  // connects to server to pull movies from the database and store its to the state
  useEffect(() => {
    let API_URL = import.meta.env.VITE_API_URL

    axios
      .get(`${API_URL}/api/movies/data`)
      .then(({ data }) => setMoviesData(data.movies))
  }, [])

  // will only need the moviesData state pass through the whole application
  const value = {
    moviesData,
  }

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  )
}
