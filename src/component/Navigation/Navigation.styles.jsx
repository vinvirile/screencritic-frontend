import styled from 'styled-components'

export const Nav = styled.div`
  background-color: #2b2d42;
  padding: 0.8rem 0;
  color: #fff;
  font-weight: bold;

  .logo {
    width: 5.6rem;
    height: 5.6rem;
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
