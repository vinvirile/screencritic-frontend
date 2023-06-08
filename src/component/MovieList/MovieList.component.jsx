import { useContext } from 'react'
import { MoviesContext } from '../../context/movies.context'
import MovieCard from '../MovieCard/MovieCard.component'
import { MovieGrid } from './MovieList.styles'
import MovieCardSkeleton from '../MovieCardSkeleton/MovieCardSkeleton.component'

// This will show all the movies in a grid system.

const MovieList = () => {
  // This is context of a state that pulls the movies from the database.
  const { moviesData, setMoviesData } = useContext(MoviesContext)

  // waits for movie skeletons to be loaded
  let movieSkeletons = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  return (
    <MovieGrid>
      {moviesData.length === 0 ? (
        <>
          {movieSkeletons.map((_, idx) => (
            <MovieCardSkeleton key={idx} />
          ))}
        </>
      ) : (
        moviesData.map((movieData) => (
          <MovieCard key={movieData._id} data={movieData} />
        ))
      )}

      {/* {moviesData.map((movieData) => (
        <MovieCard key={movieData._id} data={movieData} />
      ))} */}
    </MovieGrid>
  )
}

export default MovieList
