import StarFillIcon from '../../icons/StarFill/StarFill.icon'
import Card from '../Card/Card.component'
import Tag from '../Tag/Tag.component'
import { Link, useNavigate } from 'react-router-dom'

// This is the template of each movie card in the index page

const MovieCard = ({ data }) => {
  const navigate = useNavigate()

  const {
    _id: id,
    title,
    publisher,
    tags,
    description,
    poster,
    stars,
    releaseDate,
  } = data

  // this handles the navigation to the movie page once the user clicks on the movie card
  const navigateHandler = () => {
    navigate(`movies/${id}`)
  }

  return (
    <Card fillGrid={true} onClick={navigateHandler} pointerOnHover={true}>
      <div className="movie-flex-box">
        <div
          style={{
            background: `url("${poster}")`,
            backgroundSize: 'cover',
          }}
          className="movie-image"
        >
          <div className="movie-space"></div>
          <div className="movie-name">
            <p>{title}</p>
            <p>{publisher}</p>
          </div>
        </div>
        <div className="movie-details">
          <div className="movie-description">
            <p className="movie-release-date">Release Date: {releaseDate}</p>
            <p>{description}</p>
          </div>
          <div className="movie-extras">
            <div className="movie-ratings">
              <StarFillIcon width="1.8rem" />
              <span>{stars}/10</span>
              <Link to={`movies/${id}`}>View Reviews</Link>
            </div>
            <div className="movie-tags">
              {/* <Tag bColor="red">Adventure</Tag>
              <Tag bColor="red">Action</Tag> */}
              {tags.map((tag, idx) => (
                <Tag key={idx} bColor="red">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default MovieCard
