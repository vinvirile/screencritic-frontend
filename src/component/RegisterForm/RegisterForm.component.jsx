import { useRef, useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/user.context'
import Card from '../Card/Card.component'
import { Link } from 'react-router-dom'
import InputGroup from '../InputGroup/InputGroup.component'
import Button from '../Button/Button.component'
import axios from 'axios'

const RegisterForm = () => {
  //shows clients error messages
  const [error, setError] = useState(null)

  //once this is true, boot client to the index page
  const [success, setSuccess] = useState(false)

  // if registration was successful, proceed back to the index page
  useEffect(() => {
    if (success === true) {
      window.location = '../login'
    }
  }, [success])

  // If User is already logged in, send user back to the index page
  const { isUserLoggedIn } = useContext(UserContext)
  useEffect(() => {
    if (isUserLoggedIn) {
      window.location = '../../'
    }
  }, [isUserLoggedIn])

  // to prevent re-renders, using useRef to do form handling
  const inputFields = {
    email: useRef(),
    username: useRef(),
    password: useRef(),
    rePassword: useRef(),
  }

  // will be called when user submit form
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

    const { email, username, password, rePassword } = fields

    //Form Error Handling
    if (isFieldEmpty === true) return setError('All fields are required!')
    if (password !== rePassword) return setError('Passwords should match!')
    if (username.length < 3)
      return setError('Username should be longer than 2 characters!')
    if (!email.split('').includes('@'))
      return setError('Missing @ character for email!')

    // username field cannot have special characters
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/
    if (specialCharacterRegex.test(username))
      return setError('Username cannot contain special characters!')

    // username/email field cannot have spaces
    const spaceRegex = /\s/
    if (spaceRegex.test(username) || spaceRegex.test(email))
      return setError('Username/Email cannot contain spaces!')

    /* api call here */
    // setError('Under Construction!')
    const API_URL = import.meta.env.VITE_API_URL
    axios
      .post(`${API_URL}api/register`, { email, username, password })
      .then(({ data }) => {
        if (data.success === true) setSuccess(true)
      })
      .catch(({ response }) => {
        // grabs the object's error messages
        const { data } = response
        setError(data.errMsg)
      })
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
          ref={inputFields.username}
          name="username"
          type="text"
          placeholder="Username"
          required
        />
        <InputGroup
          ref={inputFields.password}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <InputGroup
          ref={inputFields.rePassword}
          name="repassword"
          type="password"
          placeholder="Re-Enter Password"
          required
        />

        <div className="input-group">
          <Button>Register</Button>
        </div>
        <p className="form-additional-info">
          Already have an account? Go to the <Link to="../../login">Login</Link>{' '}
          page!
        </p>
      </form>
    </Card>
  )
}

export default RegisterForm
