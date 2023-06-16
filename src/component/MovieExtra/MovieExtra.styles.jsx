import styled from 'styled-components'
import { breakpoints } from '../../base/devices'

export const MovieExtraBox = styled.div`
  display: flex;
  margin-top: 4rem;
  gap: 2rem;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`
