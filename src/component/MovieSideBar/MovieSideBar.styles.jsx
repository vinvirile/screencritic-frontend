import styled from 'styled-components'

export const MovieSideBarBox = styled.div`
  flex: 0.6;

  .movie-categories {
    background-color: #fff;
    padding: 1.8rem;
    border-radius: 0.4rem;
  }

  .movie-category {
    margin: 1.2rem 0;

    :first-child {
      margin-top: 0;
    }
  }

  .movie-category-title {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .movie-category-value {
    font-size: 1.2rem;
    font-weight: 400;
  }
`
