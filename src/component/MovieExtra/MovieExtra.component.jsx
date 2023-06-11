import React from 'react'
import Container from '../Container/Container.component'
import { MovieExtraBox } from './MovieExtra.styles'
import MovieSideBar from '../MovieSideBar/MovieSideBar.component'
import ReviewSection from '../ReviewSection/ReviewSection.component'

const MovieExtra = ({ movie }) => {
  return (
    <Container>
      <MovieExtraBox>
        <MovieSideBar movie={movie} />
        <ReviewSection movieId={movie._id} />
      </MovieExtraBox>
    </Container>
  )
}

export default MovieExtra
