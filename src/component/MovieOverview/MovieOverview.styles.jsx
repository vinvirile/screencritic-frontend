import styled from 'styled-components'
import { breakpoints } from '../../base/devices'

export const MovieDetails = styled.div`
  background-color: #fff;

  .movie-detail-box {
    display: flex;
    @media (max-width: ${breakpoints.md}) {
      display: block;
    }
  }

  .movie-poster-btns {
    flex: 0.3;
    transform: translateY(-6rem);
    display: flex;
    flex-direction: column;

    .movie-poster {
      width: 20rem;
      margin: 0 auto;
      margin-bottom: 1.2rem;
    }

    .trailer-btn {
      font-weight: bold;
      font-size: 1.6rem;
      background-color: #3577ff;
      color: #fff;
      text-align: center;
      border-radius: 0.4rem;
      padding: 0.4rem 0;

      :hover {
        background-color: #2459c5;
      }
    }

    .trailer-btn:before {
      content: '► ';
    }

    .movie-stars {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 1.2rem;
      .star-icon {
        margin: 0 auto;
      }

      .star-rating {
        font-weight: bold;
        font-size: 2.4rem;
      }
    }
  }

  .movie-description {
    flex: 1;
    padding: 2rem;
    font-weight: 300;

    h2 {
      font-size: 2.4rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`
