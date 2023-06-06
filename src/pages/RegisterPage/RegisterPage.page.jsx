import { useContext } from 'react'
import { NavBlurContext } from '../../context/navblur.context'
import HeaderTitle from '../../component/HeaderTitle/HeaderTitle.component'
import RegisterForm from '../../component/RegisterForm/RegisterForm.component'

const RegisterPage = () => {
  const { setBlurNav } = useContext(NavBlurContext)
  setBlurNav(false)

  return (
    <div className="register-page-box">
      <HeaderTitle centered={true} title="Registration" />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
