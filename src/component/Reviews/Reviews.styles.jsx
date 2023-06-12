import styled from 'styled-components'

export const ReviewBox = styled.div`
  width: 95%;
  margin: 0 auto;
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
  .movie-review {
    display: flex;

    .review {
      margin-left: 0.8rem;

      .review-user {
        font-weight: 600;
      }

      .review-timestamp {
        font-size: 1.2rem;
      }

      p {
        margin-top: 0.8rem;
      }
    }
  }

  .movie-review-extra {
    width: 90%;
    margin: 0 auto;
    margin-top: 1.2rem;

    .movie-review-interaction {
      display: inline-block;
      background-color: #e0e0e0;
      border-radius: 1.6rem;
      padding: 0.4rem 0.8rem;

      span:first-child {
        border-right: 1px solid black;
      }

      span {
        padding: 0 0.2rem;
      }

      svg:hover {
        fill: #78a5ff;
        cursor: pointer;
      }
    }
  }
`
