import { useRef, useState } from 'react'
import Card from '../Card/Card.component'
import { Link } from 'react-router-dom'
import InputGroup from '../InputGroup/InputGroup.component'
import Button from '../Button/Button.component'

const LoginForm = () => {
  const [error, setError] = useState(null)

  // to prevent re-renders, using useRef to do form handling
  const inputFields = {
    email: useRef(),
    password: useRef(),
  }

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
    setError('Under Construction!')
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
