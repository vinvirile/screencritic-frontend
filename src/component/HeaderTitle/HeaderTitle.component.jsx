import { Header } from './HeaderTitle.styles'

const HeaderTitle = ({ title, centered }) => {
  return (
    <Header centered={centered}>
      <h2>{title}</h2>
    </Header>
  )
}

export default HeaderTitle
