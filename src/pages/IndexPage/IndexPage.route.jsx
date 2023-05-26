import Card from '../../component/Card/Card.component'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import MovieCard from '../../component/MovieCard/MovieCard.component'

const IndexPage = () => {
  const MOVIE = {
    title: 'The Super Mario Bros. Movie',
    publisher: 'Nintendo',
    description:
      'The story of The Super Mario Bros. on their journey through the Mushroom Kingdom.',
    // tags: [Action, Adventure],
    stars: 8.3,
  }

  return (
    <>
      <HeaderTitle title="Movies" />
      <div
        style={{ transform: 'translate(3rem, -4.2rem)' }}
        className="movie-cards"
      >
        <MovieCard data={MOVIE} />
      </div>
    </>
  )
}

export default IndexPage
