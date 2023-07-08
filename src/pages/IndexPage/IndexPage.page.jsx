import { useContext } from 'react'
import { NavConditionContext } from '../../context/navcondition.context'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import MovieList from '../../component/MovieList/MovieList.component'
import ScrollToTop from '../../component/ScrollToTop/ScrollToTop.component'

/*
 *
 * This is the component of the index page
 *
 */

const IndexPage = () => {
  // Sets the navigation to have no blur/opacity while in the index page.
  const { setBlurNav, setStaticNav } = useContext(NavConditionContext)

  setBlurNav(false)
  setStaticNav(true)

  return (
    <>
      <ScrollToTop />
      <HeaderTitle title="Movies" />
      <div style={{ transform: 'translateY(-3.6rem)' }} className="movie-cards">
        <MovieList />
      </div>
    </>
  )
}

export default IndexPage
