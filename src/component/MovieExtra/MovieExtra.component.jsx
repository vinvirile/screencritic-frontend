import React from 'react'
import Container from '../Container/Container.component'
import { MovieExtraBox } from './MovieExtra.styles'
import MovieSideBar from '../MovieSideBar/MovieSideBar.component'

const MovieExtra = ({ movie }) => {
  return (
    <Container>
      <MovieExtraBox>
        <MovieSideBar movie={movie} />
        <div className="movie-reviews">
          <div className="movie-review">
            <p>Reviews System coming soon...</p>
          </div>
        </div>
      </MovieExtraBox>
    </Container>
  )
}

export default MovieExtra
