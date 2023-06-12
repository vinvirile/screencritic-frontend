import { ReviewBox } from './Reviews.styles'
import LikeIcon from '../../icons/Like/Like.icon'
import DislikeIcon from '../../icons/Dislike/Dislike.icon'

function getTimeAgo(timestamp) {
  const now = Date.now()
  const seconds = Math.floor((now - timestamp) / 1000)

  if (seconds < 60) {
    return seconds + ' second' + (seconds !== 1 ? 's' : '') + ' ago'
  }

  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) {
    return minutes + ' minute' + (minutes !== 1 ? 's' : '') + ' ago'
  }

  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return hours + ' hour' + (hours !== 1 ? 's' : '') + ' ago'
  }

  const days = Math.floor(hours / 24)
  return days + ' day' + (days !== 1 ? 's' : '') + ' ago'
}

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length === 0 ? (
        <b>No reviews yet...</b>
      ) : (
        reviews.map(({ _id, username, message, timestamp }) => (
          <ReviewBox key={_id}>
            <div className="movie-review">
              <div className="movie-review-avatar">
                <img className="avatar-sm" src="../../avatar.png" />
              </div>
              <div className="review">
                <span className="review-user">{username}</span>{' '}
                <span className="review-timestamp">
                  {getTimeAgo(timestamp)}
                </span>
                <p>{message}</p>
              </div>
            </div>
            <div className="movie-review-extra">
              <div className="movie-review-interaction">
                <div className="like-dislike-bubble">
                  <span className="like-half">
                    <LikeIcon /> <span>0</span>
                  </span>
                  <span className="dislike-half">
                    <DislikeIcon /> <span>0</span>
                  </span>
                </div>
              </div>
            </div>
          </ReviewBox>
        ))
      )}

      {/*  */}
    </>
  )
}

export default Reviews
