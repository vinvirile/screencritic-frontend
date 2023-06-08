import Card from '../Card/Card.component'
import Tag from '../Tag/Tag.component'

const MovieCardSkeleton = () => {
  return (
    <Card fillGrid={true} pointerOnHover={false}>
      <div className="movie-flex-box">
        <div
          style={{
            background:
              'linear-gradient(90deg, #bababa 25%, #999 50%, #bababa 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite',
          }}
          className="movie-image"
        >
          <div className="movie-space"></div>
          <div className="movie-name">
            <p className="skeleton-line-lg"></p>
            <p className="skeleton-line-lg"></p>
          </div>
        </div>
        <div className="movie-details">
          <div className="movie-description">
            <p className="movie-release-date skeleton-line-lg"></p>
            <div className="description-skeleton">
              <p className="skeleton-line-lg"></p>
              <p className="skeleton-line-lg"></p>
              <p className="skeleton-line-lg"></p>
            </div>
          </div>
          <div className="movie-extras">
            <div className="movie-ratings">
              <span className="skeleton-line-sm"></span>
            </div>
            <div className="movie-tags">
              <p
                style={{ display: 'inline-block' }}
                className="skeleton-line-md"
              ></p>
              <p
                style={{ display: 'inline-block', marginLeft: '0.4rem' }}
                className="skeleton-line-md"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default MovieCardSkeleton
