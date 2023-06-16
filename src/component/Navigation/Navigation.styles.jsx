import styled from 'styled-components'
import { breakpoints } from '../../base/devices'

export const Nav = styled.div`
  background-color: #2b2d42;
  padding: 0.8rem 0;
  color: #fff;
  font-weight: bold;
  transition: 0.3s ease;

  @media (max-width: ${breakpoints.md}) {
    padding: 0;
  }

  :hover {
    opacity: 1;
  }

  ${(props) =>
    props.blurNav &&
    `
    position: fixed;
    opacity: 0.5;
    width: 100%;
  `}

  .logo {
    width: 5.6rem;

    @media (max-width: ${breakpoints.md}) {
      width: 3.8rem;
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo-name {
    font-size: 2rem;
    position: relative;
    top: 0.8rem;
    left: -0.8rem;
    cursor: pointer;

    @media (max-width: ${breakpoints.md}) {
      font-size: 1.6rem;
    }
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-links {
    list-style: none;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
  }

  .nav-link {
    margin: 0 0.8rem;
    &-btn {
      background-color: #3577ff;
      color: inherit;
      border: none;
      padding: 0.4rem 0.8rem;
      font-weight: inherit;
      cursor: pointer;
      border-radius: 0.8rem;
    }
  }
`
