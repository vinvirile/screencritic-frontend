import { useContext } from 'react'
import { NavBlurContext } from '../../context/navblur.context'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import LoginForm from '../../component/LoginForm/LoginForm.component'

const LoginPage = () => {
  const { setBlurNav } = useContext(NavBlurContext)
  setBlurNav(false)

  return (
    <div className="register-page-box">
      <HeaderTitle centered={true} title="Login" />
      <LoginForm />
    </div>
  )
}

export default LoginPage
