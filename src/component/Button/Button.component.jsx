import { ButtonBox } from './Button.styles'

const Button = ({ children, type, color, ...otherProps }) => {
  return (
    <ButtonBox type={type} color={color} {...otherProps}>
      {children}
    </ButtonBox>
  )
}

export default Button
