import React from 'react'
import { ReactComponent as StarFill } from '../../assets/star-fill.svg'

const StarFillIcon = ({ width, height, fillColor, ...otherProps }) => {
  const styles = {
    fill: fillColor || 'orange',
    width: width || '3.2rem',
    height: height || '3.2rem',
  }

  return <StarFill style={styles} {...otherProps} />
}

export default StarFillIcon
