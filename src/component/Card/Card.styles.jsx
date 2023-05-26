import styled from 'styled-components'

export const CardStyleBox = styled.div`
  background-color: #fff;
  width: 46rem;
  color: #000;
  height: 25rem;
  border-radius: 0.4rem;
  overflow: hidden;

  .movie-flex-box {
    display: flex;
    height: 100%;
  }

  .movie-image {
    flex: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url('https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg');
    background-size: cover;

    .movie-space {
    }
  }

  .movie-name {
    background-color: #000000a2;
    padding: 0.8rem;
    color: #fff;

    p:first-child {
      font-weight: bold;
      font-size: 1.2rem;
      letter-spacing: 0.05rem;
    }

    p:last-child {
      color: red;
      font-weight: bold;
    }

    p {
      margin: 0.4rem 0;
    }
  }

  .movie-details {
    flex: 2;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    .movie-release-date {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1.2rem;
    }

    .movie-description {
      padding: 0.8rem;
      font-size: 1.8rem;
    }

    .movie-ratings {
      padding: 0.8rem;
      display: flex;
      align-items: center;
      margin-top: auto;

      span {
        font-size: 1.2rem;
      }
    }

    .movie-extras {
      margin-top: auto;

      a {
        margin-left: auto;
        font-size: 1.2rem;
      }
    }

    .movie-tags {
      background-color: #eef7fa;
      padding: 0.8rem;

      /* These are where the Tag components should be at */
      span {
        margin: 0 0.2rem;
      }
    }
  }
`