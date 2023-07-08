import { useContext } from 'react'
import { NavConditionContext } from '../../context/navcondition.context'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import RegisterForm from '../../component/RegisterForm/RegisterForm.component'

const RegisterPage = () => {
  const { setBlurNav, setStaticNav } = useContext(NavConditionContext)
  setBlurNav(false)
  setStaticNav(true)

  return (
    <div className="register-page-box">
      <HeaderTitle centered={true} title="Registration" />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
