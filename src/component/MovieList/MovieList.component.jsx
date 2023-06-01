import { useContext } from 'react'
import { MoviesContext } from '../../context/movies.context'
import MovieCard from '../MovieCard/MovieCard.component'
import { MovieGrid } from './MovieList.styles'

// This will show all the movies in a grid system.

const MovieList = () => {
  // This is context of a state that pulls the movies from the database.
  const { moviesData } = useContext(MoviesContext)

  return (
    <MovieGrid>
      {moviesData.map((movieData) => (
        <MovieCard key={movieData._id} data={movieData} />
      ))}
    </MovieGrid>
  )
}

export default MovieList
