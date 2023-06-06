import { ButtonBox } from './Button.styles'

const Button = ({ children, type, color }) => {
  return (
    <ButtonBox type={type} color={color}>
      {children}
    </ButtonBox>
  )
}

export default Button
