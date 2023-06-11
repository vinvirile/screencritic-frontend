import styled from 'styled-components'

export const InputGroupBox = styled.div`
  margin: 1.8rem 0;

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    width: 60%;
    font-size: 1.8rem;
  }

  textarea {
    width: 80%;
    resize: none;
    background: none;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid #000;

    :focus {
      outline: none;
    }
  }
`
