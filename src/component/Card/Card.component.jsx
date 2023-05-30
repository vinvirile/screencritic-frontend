import { CardStyleBox } from './Card.styles'

const Card = ({ children, pointerOnHover, ...otherProps }) => {
  return (
    <CardStyleBox pointerOnHover={pointerOnHover} {...otherProps}>
      {children}
    </CardStyleBox>
  )
}

export default Card
