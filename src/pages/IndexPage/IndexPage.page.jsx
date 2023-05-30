import { useContext } from 'react'
import { NavBlurContext } from '../../context/navblur.context'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import MovieList from '../../component/MovieList/MovieList.component'

const IndexPage = () => {
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
