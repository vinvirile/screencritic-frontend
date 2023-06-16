import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { MovieReviewsBox } from './ReviewSection.styles'
import axios from 'axios'
import Reviews from '../Reviews/Reviews.component'
import ReviewInput from '../ReviewInput/ReviewInput.component'
import { Link } from 'react-router-dom'

const ReviewSection = ({ movieId }) => {
  const { userData, isUserLoggedIn } = useContext(UserContext)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL
    axios.get(`${API_URL}api/reviews/data?m=${movieId}`).then(({ data }) => {
      setReviews(data.arr)
    })
  }, [movieId])

  return (
    <MovieReviewsBox>
      <div className="movie-userinput-box">
        {isUserLoggedIn ? (
          <>
            <div className="userinfo">
              <div className="userinfo-avatar">
                <img className="avatar" src="../../avatar.png" />
                <p className="userinfo-user">
                  Review as <span className="user">{userData.username}</span>
                </p>
              </div>
            </div>
            <ReviewInput mid={movieId} setReviews={setReviews} />
          </>
        ) : (
          <p style={{ marginBottom: '1.2rem' }} className="userinfo-user">
            <Link to="../../login">Login</Link> to create a review!
          </p>
        )}
        <Reviews reviews={reviews} />
      </div>
    </MovieReviewsBox>
  )
}

export default ReviewSection
