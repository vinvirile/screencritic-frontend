import { useContext } from 'react'
import Logo from '../../assets/screencritic-logo.png'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { NavBlurContext } from '../../context/navblur.context'
import { Nav } from './Navigation.styles'
import Container from '../Container/Container.component'

const Navigation = () => {
  const { blurNav } = useContext(NavBlurContext)
  const navigate = useNavigate()

  const backToHome = () => {
    navigate('../../')
  }

  return (
    <>
      <Nav blurNav={blurNav}>
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
                <li className="nav-link">Login</li>
                <li className="nav-link">
                  <Link to="/register">
                    <button className="nav-link-btn">Register</button>
                  </Link>
                </li>
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
