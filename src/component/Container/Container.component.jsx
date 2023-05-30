import React from 'react'
import { ContainerBox } from './Container.styles'

const Container = ({ children, ...otherProps }) => {
  return <ContainerBox {...otherProps}>{children}</ContainerBox>
}

export default Container
