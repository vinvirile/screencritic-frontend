import styled from 'styled-components'

export const ButtonBox = styled.button`
  background-color: ${({ bColor }) => (bColor ? bColor : '#3577ff')};
  color: ${({ tColor }) => (tColor ? tColor : '#fff')};
  border: none;
  padding: 0.4rem 0.8rem;
  font-weight: inherit;
  cursor: pointer;
  border-radius: 0.8rem;
  font-size: 1.6rem;
`
