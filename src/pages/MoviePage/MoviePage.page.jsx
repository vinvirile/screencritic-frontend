import { useContext } from 'react'
import { NavBlurContext } from '../../context/navblur.context'
import Banner from '../../component/Banner/Banner.component'
import Container from '../../component/Container/Container.component'
import { MovieDetails } from './MoviePage.styles'
import StarFillIcon from '../../icons/StarFill/StarFill.icon'

const MoviePage = () => {
  const { setBlurNav } = useContext(NavBlurContext)
  setBlurNav(true)
  return (
    <>
      <Banner coverUrl="https://www.gamespot.com/a/uploads/scale_super/1597/15976769/4098449-mario-battles-donkey-kong-in-the-super-mario-bros-movie-trailer.jpg" />
      <MovieDetails>
        <Container>
          <div className="movie-detail-box">
            <div className="movie-poster-btns">
              <img
                className="movie-poster"
                src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg"
              />
              <div className="movie-stars">
                <StarFillIcon className="star-icon" width="2.4rem" />
                <span className="star-rating">8.3</span>
              </div>
              <a
                href="https://www.youtube.com/watch?v=TnGl01FkMMo&ab_channel=Illumination"
                target="_blank"
                className="trailer-btn"
              >
                Watch Trailer
              </a>
            </div>
            <div className="movie-description">
              <h2>The Super Mario Bros. Movie</h2>
              <p>
                The Super Mario Bros. Movie is about brothers Mario and Luigi
                who are transported from Brooklyn to a fantastical world via a
                Warp Pipe. Mario lands in the Mushroom Kingdom, ruled by
                Princess Peach, while Luigi ends up in the Dark Lands under the
                evil King Bowser's control. Bowser plans to marry Peach and
                destroy the Mushroom Kingdom. With the help of allies, including
                Toad and the Kongs, Mario and Luigi manage to thwart Bowser's
                plans.
              </p>
            </div>
          </div>
        </Container>
      </MovieDetails>
    </>
  )
}

export default MoviePage
