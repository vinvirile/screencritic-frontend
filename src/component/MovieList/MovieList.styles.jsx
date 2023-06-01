import styled from 'styled-components'
import { breakpoints } from '../../base/devices'

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  justify-items: center;
  column-gap: 2rem;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  @media (min-width: ${breakpoints.xxxl}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
