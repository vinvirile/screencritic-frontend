import { useContext } from 'react'
import { NavBlurContext } from '../../context/navblur.context'
import Card from '../../component/Card/Card.component'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import MovieCard from '../../component/MovieCard/MovieCard.component'
import MovieList from '../../component/MovieList/MovieList.component'

const IndexPage = () => {
  const { setBlurNav } = useContext(NavBlurContext)

  setBlurNav(false)

  return (
    <>
      <HeaderTitle title="Movies" />
      <div style={{ transform: 'translateY(-4.2rem)' }} className="movie-cards">
        <MovieList />
      </div>
    </>
  )
}

export default IndexPage
