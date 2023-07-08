import { useContext } from 'react'
import Logo from '../../assets/screencritic-logo.png'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { NavConditionContext } from '../../context/navcondition.context'
import { UserContext } from '../../context/user.context'
import { Nav } from './Navigation.styles'
import Container from '../Container/Container.component'
import axios from 'axios'

const Navigation = () => {
  const { blurNav, staticNav } = useContext(NavConditionContext)
  const { setUserData, isUserLoggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  const backToHome = () => {
    navigate('../../')
  }

  const logoutHandler = () => {
    setUserData({})
    let API_URL = import.meta.env.VITE_API_URL
    axios.patch(
      `${API_URL}api/logout`,
      {},
      {
        withCredentials: true,
      }
    )
  }

  return (
    <>
      <Nav blurNav={blurNav} staticNav={staticNav}>
        <div className="navigation-box">
          <Container>
            <div className="box">
              <div className="logo-container">
                <Link className="screencritic" to="./">
                  <img className="logo" src={Logo} alt="Logo" />
                </Link>
                <div>
                  <span onClick={backToHome} className="logo-name">
                    ScreenCritics
                    {import.meta.env.MODE === 'development' && (
                      <sup style={{ color: 'red', fontSize: '1rem' }}>DEV</sup>
                    )}
                  </span>
                </div>
              </div>
              <ul className="nav-links">
                {isUserLoggedIn ? (
                  <li className="nav-link">
                    <span style={{ cursor: 'pointer' }} onClick={logoutHandler}>
                      Logout
                    </span>
                  </li>
                ) : (
                  <>
                    <li className="nav-link">
                      <Link to="../../login">Login</Link>
                    </li>
                    <li className="nav-link">
                      <Link to="../../register">
                        <button className="nav-link-btn">Register</button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </Container>
        </div>
      </Nav>
      <Outlet />
    </>
  )
}

export default Navigation
