import MovieCard from '../MovieCard/MovieCard.component'
import DATA from '../../data/movies'
import { MovieGrid } from './MovieList.styles'

const MovieList = () => {
  /* 
  
  ADD GRID TO THIS AND IMAGES DO NOT WORK OTHER THAN SUPER MARIO BROS MOVIE

  */

  return (
    <MovieGrid>
      {DATA.map((movieData) => (
        <MovieCard key={movieData.id} data={movieData} />
      ))}
    </MovieGrid>
  )
}

export default MovieList
