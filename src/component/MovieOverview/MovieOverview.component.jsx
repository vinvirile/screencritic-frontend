import React from 'react'
import { MovieDetails } from './MovieOverview.styles'
import Container from '../Container/Container.component'
import StarFillIcon from '../../icons/StarFill/StarFill.icon'

// Movie's overview for the MoviePage

const MovieOverview = ({ movie }) => {
  return (
    <MovieDetails>
      <Container>
        <div className="movie-detail-box">
          <div className="movie-poster-btns">
            <img className="movie-poster" src={movie.poster} />
            <div className="movie-stars">
              <StarFillIcon className="star-icon" width="2.4rem" />
              <span className="star-rating">{movie.stars}</span>
            </div>
            <a
              href={movie.trailer || ''}
              target="_blank"
              className="trailer-btn"
            >
              Watch Trailer
            </a>
          </div>
          <div className="movie-description">
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
          </div>
        </div>
      </Container>
    </MovieDetails>
  )
}

export default MovieOverview
