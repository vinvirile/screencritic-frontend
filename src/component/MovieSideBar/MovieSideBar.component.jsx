import React from 'react'
import { MovieSideBarBox } from './MovieSideBar.styles'

const MovieSideBar = ({ movie }) => {
  let { tags, releaseDate } = movie

  // must set default to array so no "map error"
  tags = tags || []

  return (
    <MovieSideBarBox>
      <div className="movie-categories">
        <div className="movie-category">
          <p className="movie-category-title">Release</p>
          <p className="movie-category-value">{releaseDate}</p>
        </div>
        <div className="movie-category">
          <p className="movie-category-title">Tags</p>
          <p className="movie-category-value">
            {tags.map((tag, idx) => {
              // checks to see if its the last tag in the array
              const isLastTag = idx === tags.length - 1

              // if its not the last tag, add a comma
              return (
                <span key={idx}>
                  {tag}
                  {!isLastTag && ', '}
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </MovieSideBarBox>
  )
}

export default MovieSideBar
