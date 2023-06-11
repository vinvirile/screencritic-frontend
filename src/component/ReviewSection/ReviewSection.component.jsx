import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/user.context'
import InputGroup from '../InputGroup/InputGroup.component'
import Button from '../Button/Button.component'
import { MovieReviewsBox } from './ReviewSection.styles'
import axios from 'axios'

const ReviewSection = ({ movieId }) => {
  const [reviews, setReviews] = useState([])
  const { userData, isUserLoggedIn } = useContext(UserContext)
  const isLoading = reviews.length

  useEffect(() => {}, [movieId])

  return (
    <MovieReviewsBox>
      <div className="movie-userinput-box">
        {isUserLoggedIn ? (
          <>
            <div className="userinfo">
              <div className="userinfo-avatar">
                <img className="avatar" src="../../avatar.png" />
                <p>
                  Review as <span className="user">{userData.username}</span>
                </p>
              </div>
            </div>
            <div className="userinput-box">
              <InputGroup type="textarea" placeholder="Write a review..." />
              <Button>Send</Button>
            </div>
          </>
        ) : (
          <p>You are not logged in...</p>
        )}
      </div>
    </MovieReviewsBox>
  )
}

export default ReviewSection
