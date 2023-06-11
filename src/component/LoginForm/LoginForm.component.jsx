import { useRef, useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/user.context'
import Card from '../Card/Card.component'
import { Link } from 'react-router-dom'
import InputGroup from '../InputGroup/InputGroup.component'
import Button from '../Button/Button.component'
import axios from 'axios'

const LoginForm = () => {
  const [error, setError] = useState(null)

  // grab user context
  const { isUserLoggedIn } = useContext(UserContext)

  // If User is already logged in, send user back to the index page
  useEffect(() => {
    if (isUserLoggedIn) {
      window.location = '../../'
    }
  }, [isUserLoggedIn])

  // to prevent re-renders, using useRef to do form handling
  const inputFields = {
    email: useRef(),
    password: useRef(),
  }

  // login handler
  const submitHandler = (e) => {
    e.preventDefault()

    let isFieldEmpty = false
    const fields = {}
    // simplifying the object to only pull the value from the reference object
    for (let input in inputFields) {
      fields[input] = inputFields[input].current.value
      // set isFieldEmpty to true if all fields aren't filled out
      if (!fields[input]) isFieldEmpty = true
    }

    const { email, password } = fields

    //Form Error Handling
    if (isFieldEmpty === true) return setError('All fields are required!')
    if (!email.split('').includes('@'))
      return setError('Missing @ character for email!')

    /* api call here */
    const API_URL = import.meta.env.VITE_API_URL
    axios
      .post(
        `${API_URL}api/login`,
        { email, password },
        { withCredentials: true }
      )
      .then(({ data }) => {
        if (data.success) {
          window.location = '../'
        }
      })
    console.log(fields)
  }

  return (
    <Card
      noHeight={true}
      style={{ transform: 'translateY(-2rem)', margin: '0 auto' }}
    >
      <form
        className="registration-form"
        method="POST"
        onSubmit={submitHandler}
      >
        {error && (
          <div className="form-error-box">
            <span className="error-icon">!</span>
            <p className="form-error-message">{error}</p>
          </div>
        )}
        <InputGroup
          ref={inputFields.email}
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <InputGroup
          ref={inputFields.password}
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <div className="input-group">
          <Button>Login</Button>
        </div>
        <p className="form-additional-info">
          Don't have an account? Go to the{' '}
          <Link to="../../register">Register</Link> page!
        </p>
      </form>
    </Card>
  )
}

export default LoginForm
