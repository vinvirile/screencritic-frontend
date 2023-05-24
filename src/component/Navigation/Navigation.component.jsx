import Logo from '../../assets/screencritic-logo.png'
import { Link } from 'react-router-dom'
import { Nav } from './Navigation.styles'

const Navigation = () => {
  return (
    <Nav>
      <div className="navigation-box">
        <div className="container">
          <div className="box">
            <div className="logo-container">
              <Link className="screencritic" to="./">
                <img className="logo" src={Logo} alt="Logo" />
              </Link>
              <div>
                <span className="logo-name">ScreenCritics</span>
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
        </div>
      </div>
    </Nav>
  )
}

export default Navigation
