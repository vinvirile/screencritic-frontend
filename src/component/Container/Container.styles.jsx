import styled from 'styled-components'
import { breakpoints } from '../../base/devices'

export const ContainerBox = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  @media (max-width: ${breakpoints.lg}) {
    max-width: 75rem;
  }
  @media (max-width: ${breakpoints.md}) {
    padding: 2rem;
  }
`
