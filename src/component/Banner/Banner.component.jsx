import React from 'react'
import { BannerBox } from './Banner.styles'

const Banner = ({ coverUrl }) => {
  return (
    <>
      <BannerBox coverUrl={coverUrl}></BannerBox>
    </>
  )
}

export default Banner
