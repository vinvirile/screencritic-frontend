import styled from 'styled-components'

export const CardStyleBox = styled.div`
  background-color: #fff;
  width: 50rem;
  color: #000;
  height: 25rem;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(49, 54, 68, 0.05),
    0 5px 20px rgba(49, 54, 68, 0.08);
  transition: 0.2s ease;

  ${(props) =>
    props.noHeight &&
    `
    height: auto;
  `}

  ${(props) =>
    props.fillGrid &&
    `
    width: 100%;
  `}

  ${(props) =>
    props.pointerOnHover &&
    `
  :hover {
    box-shadow: 0 4px 6px rgba(49, 54, 68, 0.09),
      0 10px 40px rgba(49, 54, 68, 0.3);
    cursor: pointer;
  }
  `}

  .movie-flex-box {
    display: flex;
    height: 100%;
  }

  .movie-image {
    flex: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
      font-size: 1.6rem;
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

  .registration-form {
    padding: 2.4rem;
    font-size: 1.2rem;
  }

  input,
  textarea {
    outline: 0;
    border-width: 0 0 2px;
    border-color: #000;
  }

  .form-additional-info {
    font-size: 1.4rem;
    margin-top: 1.2rem;

    a,
    a:link,
    a:visited {
      font-weight: 600;
      color: #3577ff;
    }
  }

  .form-error-box {
    border-radius: 1rem;
    padding: 1.2rem;
    border: 1px solid red;
    color: red;
    display: flex;
    font-size: 1.8rem;

    .error-icon {
      border-radius: 50%;
      width: 2.4rem;
      height: 2.4rem;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
    }
  }

  .form-error-message {
    margin-left: 1.2rem;
  }

  .description-skeleton {
    p {
      margin: 1.2rem 0;
    }
  }

  .skeleton-line,
  .skeleton-line-sm,
  .skeleton-line-md,
  .skeleton-line-lg {
    background: linear-gradient(90deg, #bababa 25%, #999 50%, #bababa 75%);
    background-size: 200% 100%;
    border-radius: 0.2rem;
    height: 1.2rem;
    animation: loading 1.5s infinite;
  }

  .skeleton-line-sm {
    width: 15%;
  }

  .skeleton-line-md {
    width: 40%;
  }

  .skeleton-line-lg {
    width: 80%;
  }

  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`
