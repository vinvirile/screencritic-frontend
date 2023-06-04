import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { NavBlurContext } from '../../context/navblur.context'
import { MoviesContext } from '../../context/movies.context'
import Banner from '../../component/Banner/Banner.component'
import MovieOverview from '../../component/MovieOverview/MovieOverview.component'
import MovieExtra from '../../component/MovieExtra/MovieExtra.component'

/*
 *
 * This is the movie component page.
 * Path: "/movies/*"
 *
 */

const MoviePage = () => {
  const { setBlurNav } = useContext(NavBlurContext)
  const { moviesData } = useContext(MoviesContext)

  /*
   * The params variable represents the current location path, which may have a structure like this:
   * /movies/6476b03007e8e909c3df2284
   *
   * To extract the movie ID from the path, we split it using the '/movies/' string as a separator. This results in an array with two elements:
   * the portion before '/movies/' and the portion after it.
   *
   * We assign the second element of the array, which represents the movie ID as a string, to the constant movieId.
   *
   */
  const currentPath = useLocation()
  const pathSegments = currentPath.pathname.split('/movies/')
  const movieId = pathSegments[1]

  /*
   * The 'filteredMovie' constant filters the 'moviesData' array to find the movie that matches the 'movieId' value.
   * It uses the 'filter' method and compares the '_id' property of each movie with the 'movieId' value.
   *
   * The 'movie' constant represents the selected movie with all its data.
   * We will use this 'movie' constant to populate the remaining data on the page.
   * If no movie is found in the 'filteredMovie' array, an empty object is assigned to the 'movie' constant as a fallback.
   *
   */
  const filteredMovie = moviesData.filter((movie) => {
    return movie._id === movieId
  })
  const movie = filteredMovie[0] || {}

  /*
   * To make banner pop, setting setBlurNav to true makes the nav stay at the top of the screen as you scroll
   * It also lowers the opacity of the nav bar
   */
  setBlurNav(true)
  return (
    <>
      <Banner coverUrl={movie.cover} />
      <MovieOverview movie={movie} />
      <MovieExtra movie={movie} />
    </>
  )
}

export default MoviePage
