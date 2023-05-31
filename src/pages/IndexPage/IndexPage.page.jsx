import { useContext } from 'react'
import { NavBlurContext } from '../../context/navblur.context'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import MovieList from '../../component/MovieList/MovieList.component'

/*
 *
 * This is the component of the index page
 *
 */

const IndexPage = () => {
  // Sets the navigation to have no blur/opacity while in the index page.
  const { setBlurNav } = useContext(NavBlurContext)
  setBlurNav(false)

  return (
    <>
      <HeaderTitle title="Movies" />
      <div style={{ transform: 'translateY(-3.6rem)' }} className="movie-cards">
        <MovieList />
      </div>
    </>
  )
}

export default IndexPage
