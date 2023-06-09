import { forwardRef } from 'react'
import { InputGroupBox } from './InputGroup.styles'

// refs needs to be forwarded to the InputGroup component using forwardRef
const InputGroup = forwardRef(({ placeholder, type, ...otherProps }, ref) => {
  return (
    <InputGroupBox>
      {type === 'textarea' ? (
        <textarea
          name="textarea"
          ref={ref}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...otherProps}
        />
      )}
    </InputGroupBox>
  )
})

export default InputGroup
