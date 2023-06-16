import styled from 'styled-components'
import { breakpoints } from '../../base/devices'

export const BannerBox = styled.div`
  height: 36rem;
  /* background: url(); */

  ${(props) =>
    props.coverUrl &&
    `
    background: url('${props.coverUrl}');
    background-size: cover;
    background-position: center center;
  `}

  @media (max-width: ${breakpoints.lg}) {
    height: 18rem;
  }
`
