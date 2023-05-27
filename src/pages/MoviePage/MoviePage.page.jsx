import { useContext } from 'react'
import { NavBlurContext } from '../../context/navblur.context'
import Banner from '../../component/Banner/Banner.component'

const MoviePage = () => {
  const { setBlurNav } = useContext(NavBlurContext)
  setBlurNav(true)
  return (
    <>
      <Banner coverUrl="https://www.gamespot.com/a/uploads/scale_super/1597/15976769/4098449-mario-battles-donkey-kong-in-the-super-mario-bros-movie-trailer.jpg" />
    </>
  )
}

export default MoviePage
