import styled from 'styled-components'

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
`
