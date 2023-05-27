import { CardStyleBox } from './Card.styles'

const Card = ({ children, pointerOnHover }) => {
  return <CardStyleBox pointerOnHover={pointerOnHover}>{children}</CardStyleBox>
}

export default Card
