import { useRef, useContext } from 'react'
import InputGroup from '../InputGroup/InputGroup.component'
import { ReviewInputBox } from './ReviewInput.styles'
import Button from '../Button/Button.component'
import axios from 'axios'
import { UserContext } from '../../context/user.context'

const ReviewInput = ({ mid, setReviews }) => {
  const reviewInput = useRef(null)

  const { userData } = useContext(UserContext)

  const sendReview = () => {
    const API_URL = import.meta.env.VITE_API_URL
    let input = reviewInput.current.value
    axios
      .post(
        `${API_URL}api/reviews/create?m=${mid}`,
        {
          input,
        },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data)
        reviewInput.current.value = ''

        setReviews((reviews) => {
          return [
            {
              _id: Math.random(),
              username: userData.username,
              timestamp: Date.now(),
              message: input,
            },
            ...reviews,
          ]
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <ReviewInputBox>
      <InputGroup
        ref={reviewInput}
        type="textarea"
        placeholder="Write a review..."
      />
      <Button onClick={sendReview}>Send</Button>
    </ReviewInputBox>
  )
}

export default ReviewInput
