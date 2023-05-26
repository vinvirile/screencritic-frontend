import Card from '../../component/Card/Card.component'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import MovieCard from '../../component/MovieCard/MovieCard.component'

const IndexPage = () => {
  const MOVIE = {
    id: 1,
    title: 'The Super Mario Bros. Movie',
    publisher: 'Nintendo',
    description:
      'The story of The Super Mario Bros. on their journey through the Mushroom Kingdom.',
    tags: ['Action', 'Adventure'],
    stars: 8.3,
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg',
    releaseDate: 'April 5, 2023',
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
