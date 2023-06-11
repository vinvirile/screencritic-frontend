import styled from 'styled-components'

export const MovieReviewsBox = styled.div`
  flex: 2;

  .movie-review,
  .movie-userinput-box {
    background-color: #fff;
    border-radius: 0.4rem;
    padding: 0.8rem;
    .userinfo-avatar {
      display: flex;
      align-items: center;
    }

    p {
      font-size: 1.6rem;
      margin-left: 1.2rem;
    }

    .userinput-box {
      margin: 0 auto;
      width: 90%;

      textarea {
        width: 100%;
      }

      button {
        display: block;
        margin-left: auto;
      }
    }
    .user {
      font-weight: 600;
    }
  }
`
