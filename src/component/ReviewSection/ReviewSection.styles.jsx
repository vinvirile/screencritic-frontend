import styled from 'styled-components'

export const MovieReviewsBox = styled.div`
  flex: 2;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 0.8rem;

  .movie-userinput-box {
    .userinfo-avatar {
      display: flex;
      align-items: center;
    }

    .userinfo-user {
      font-size: 1.8rem;
      margin-left: 1.2rem;
      margin-top: 1.2rem;
      padding-bottom: 2.4rem;
      span {
        margin-left: 1.6rem;
      }
      a {
        font-weight: 600;
      }
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    .userinput-box {
    }
    .user {
      font-weight: 600;
      margin: 0 !important;
    }
  }
`
