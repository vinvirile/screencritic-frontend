import { useContext } from 'react'
import { NavConditionContext } from '../../context/navcondition.context'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import LoginForm from '../../component/LoginForm/LoginForm.component'

const LoginPage = () => {
  const { setBlurNav, setStaticNav } = useContext(NavConditionContext)
  setBlurNav(false)
  setStaticNav(true)

  return (
    <div className="register-page-box">
      <HeaderTitle centered={true} title="Login" />
      <LoginForm />
    </div>
  )
}

export default LoginPage
